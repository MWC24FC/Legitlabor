// Centralize test IDs. Replace with real data-testid values when available.
export const sel = {
  headerLogo:   '[data-testid="header-logo"]',
  signInLink:   '[data-testid="link-sign-in"]',
  signUpLink:   '[data-testid="link-sign-up"]',
  emailInput:   '[data-testid="input-email"]',
  passInput:    '[data-testid="input-password"]',
  submitBtn:    '[data-testid="btn-submit"]',

  // Employer
  newJobBtn:    '[data-testid="btn-new-job"]',
  jobTitle:     '[data-testid="input-job-title"]',
  jobDesc:      '[data-testid="input-job-desc"]',
  jobPay:       '[data-testid="input-job-pay"]',
  postJobBtn:   '[data-testid="btn-post-job"]',

  // Worker
  jobsList:     '[data-testid="list-jobs"]',
  applyBtn:     '[data-testid="btn-apply"]',
  chatInput:    '[data-testid="input-chat"]',
  sendMsgBtn:   '[data-testid="btn-send-msg"]',

  // Attendance
  clockInBtn:   '[data-testid="btn-clock-in"]',
  clockOutBtn:  '[data-testid="btn-clock-out"]',
  payoutRow:    '[data-testid="payout-row"]',

  // Penalties
  cancelBtn:    '[data-testid="btn-cancel"]',
  penaltyBanner:'[data-testid="penalty-banner"]',

  // Navigation
  footerLink:   '[data-testid="footer-link"]',

  // Admin
  adminOnly:    '[data-testid="admin-dashboard"]',
  runE2E:       '[data-testid="btn-run-e2e"]',
};
