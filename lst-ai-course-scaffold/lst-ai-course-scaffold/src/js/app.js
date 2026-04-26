import {
  applicantFields,
  assessmentQuestions,
  coursePhases,
  getTrackForScore,
  modules,
  trackBands
} from './course-data.js';

const state = {
  answers: {},
  score: null,
  track: null
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => Array.from(document.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function renderPhases() {
  const container = $('#phaseGrid');
  container.innerHTML = coursePhases
    .map(
      (phase) => `
        <article class="card phase-card">
          <span class="eyebrow">Weeks ${escapeHtml(phase.weeks)}</span>
          <h3>${escapeHtml(phase.title)}</h3>
          <p>${escapeHtml(phase.focus)}</p>
        </article>
      `
    )
    .join('');
}

function renderTracks() {
  const container = $('#trackGrid');
  container.innerHTML = trackBands
    .map(
      (track) => `
        <article class="card track-card" data-track="${escapeHtml(track.key)}">
          <span class="eyebrow">${escapeHtml(track.range)} points</span>
          <h3>${escapeHtml(track.name)}</h3>
          <p>${escapeHtml(track.summary)}</p>
          <strong>${escapeHtml(track.workload)}</strong>
        </article>
      `
    )
    .join('');
}

function renderModules() {
  const container = $('#moduleList');
  container.innerHTML = modules
    .map(
      (module) => `
        <details class="module-card">
          <summary>
            <span>Module ${module.number}: ${escapeHtml(module.title)}</span>
            <small>Weeks ${escapeHtml(module.weeks)}</small>
          </summary>
          <div class="module-body">
            <p class="module-question">${escapeHtml(module.question)}</p>
            <div class="two-col compact">
              <div>
                <h4>Lectures</h4>
                <ul>${module.lectures.map((lecture) => `<li>${escapeHtml(lecture)}</li>`).join('')}</ul>
              </div>
              <div>
                <h4>Deliverables</h4>
                <ul>${module.deliverables.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
              </div>
            </div>
          </div>
        </details>
      `
    )
    .join('');
}

function renderAssessment() {
  const container = $('#questionList');
  container.innerHTML = assessmentQuestions
    .map(
      (question) => `
        <fieldset class="question-card" id="question-${question.id}">
          <legend><span>${question.id}</span>${escapeHtml(question.prompt)}</legend>
          ${question.options
            .map(
              (option, index) => `
                <label class="answer-option">
                  <input type="radio" name="q${question.id}" value="${index + 1}" />
                  <span>${escapeHtml(option)}</span>
                </label>
              `
            )
            .join('')}
        </fieldset>
      `
    )
    .join('');

  container.addEventListener('change', handleAssessmentChange);
  $('#scoreAssessment').addEventListener('click', scoreAssessment);
  $('#resetAssessment').addEventListener('click', resetAssessment);
}

function handleAssessmentChange(event) {
  if (!event.target.matches('input[type="radio"]')) return;

  const questionId = Number(event.target.name.replace('q', ''));
  state.answers[questionId] = Number(event.target.value);
  updateProgress();
}

function updateProgress() {
  const answered = Object.keys(state.answers).length;
  const total = assessmentQuestions.length;
  const percent = Math.round((answered / total) * 100);

  $('#answeredCount').textContent = String(answered);
  $('#totalCount').textContent = String(total);
  $('#progressFill').style.width = `${percent}%`;
  $('#scoreAssessment').disabled = answered !== total;
}

function scoreAssessment() {
  const answered = Object.keys(state.answers).length;
  if (answered !== assessmentQuestions.length) return;

  state.score = Object.values(state.answers).reduce((sum, value) => sum + value, 0);
  state.track = getTrackForScore(state.score);

  renderResult();
  renderApplicantForm();
  $('#resultPanel').hidden = false;
  $('#applicationSection').hidden = false;
  $('#applicationSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function resetAssessment() {
  state.answers = {};
  state.score = null;
  state.track = null;

  $$('input[type="radio"]').forEach((input) => {
    input.checked = false;
  });

  $('#resultPanel').hidden = true;
  $('#applicationSection').hidden = true;
  $('#applicationConfirmation').hidden = true;
  $('#applicantForm').innerHTML = '';
  updateProgress();
}

function renderResult() {
  const result = $('#resultPanel');
  result.innerHTML = `
    <div class="result-card">
      <span class="eyebrow">Placement result</span>
      <h3>${state.score}/80 — ${escapeHtml(state.track.name)}</h3>
      <p>${escapeHtml(state.track.summary)}</p>
      <p><strong>Expected workload:</strong> ${escapeHtml(state.track.workload)}</p>
      <p class="small-note">This placement measures system orientation, not worth. A lower placement is not lesser. It means the work should begin closer to the ground.</p>
    </div>
  `;
}

function renderApplicantForm() {
  const form = $('#applicantForm');
  form.innerHTML = `
    <div class="auto-fields">
      <label>
        Assessment score
        <input name="assessmentScore" value="${state.score}" readonly />
      </label>
      <label>
        Track placement
        <input name="trackPlacement" value="${escapeHtml(state.track.name)}" readonly />
      </label>
      <label>
        Date completed
        <input name="dateCompleted" value="${new Date().toISOString().slice(0, 10)}" readonly />
      </label>
    </div>
    ${applicantFields.map(renderField).join('')}
    <div class="form-actions">
      <button class="primary" type="submit">Submit Application</button>
      <button class="secondary" type="button" id="exportApplications">Export Saved Applications</button>
    </div>
  `;

  form.addEventListener('submit', submitApplication, { once: false });
  $('#exportApplications').addEventListener('click', exportApplications);
}

function renderField(field) {
  const required = field.required ? 'required' : '';
  const requiredMark = field.required ? ' <span aria-hidden="true">*</span>' : '';

  if (field.type === 'textarea') {
    return `
      <label class="field-block">
        ${escapeHtml(field.label)}${requiredMark}
        <textarea name="${escapeHtml(field.name)}" ${required} rows="4"></textarea>
      </label>
    `;
  }

  if (field.type === 'select') {
    return `
      <label class="field-block">
        ${escapeHtml(field.label)}${requiredMark}
        <select name="${escapeHtml(field.name)}" ${required}>
          ${field.options.map((option) => `<option value="${escapeHtml(option)}">${escapeHtml(option || 'No preference')}</option>`).join('')}
        </select>
      </label>
    `;
  }

  if (field.type === 'checkbox') {
    return `
      <label class="check-block">
        <input type="checkbox" name="${escapeHtml(field.name)}" ${required} />
        <span>${escapeHtml(field.label)}${requiredMark}</span>
      </label>
    `;
  }

  return `
    <label class="field-block">
      ${escapeHtml(field.label)}${requiredMark}
      <input type="${escapeHtml(field.type)}" name="${escapeHtml(field.name)}" ${required} />
    </label>
  `;
}

function submitApplication(event) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const application = {
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    submittedAt: new Date().toISOString(),
    assessmentScore: state.score,
    trackPlacement: state.track.name,
    answers: { ...state.answers },
    fields: {}
  };

  applicantFields.forEach((field) => {
    if (field.type === 'checkbox') {
      application.fields[field.name] = formData.get(field.name) === 'on';
    } else {
      application.fields[field.name] = String(formData.get(field.name) || '').trim();
    }
  });

  const saved = JSON.parse(localStorage.getItem('lstAiApplications') || '[]');
  saved.push(application);
  localStorage.setItem('lstAiApplications', JSON.stringify(saved, null, 2));

  event.currentTarget.reset();
  $('#applicationConfirmation').hidden = false;
  $('#applicationConfirmation').textContent = 'Your application has been saved locally in this browser. Export saved applications before clearing browser data.';
}

function exportApplications() {
  const saved = localStorage.getItem('lstAiApplications') || '[]';
  const blob = new Blob([saved], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'lst-ai-applications.json';
  link.click();
  URL.revokeObjectURL(url);
}

function bindNavigation() {
  $$('[data-scroll]').forEach((button) => {
    button.addEventListener('click', () => {
      const target = $(button.dataset.scroll);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function init() {
  renderPhases();
  renderTracks();
  renderModules();
  renderAssessment();
  updateProgress();
  bindNavigation();
}

document.addEventListener('DOMContentLoaded', init);
