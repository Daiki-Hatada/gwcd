export const CLIENT_PATH = {
  INDEX: {
    title: 'Index Page',
    path: '/',
  },
  AUTH_ACTION: {
    title: 'Action Page',
    path: '/auth/action',
  },
  AUTH_EMAIL_VERIFICATION: {
    title: 'Email Verification Page',
    path: '/auth/email-verification',
  },
  AUTH_MFA_ENROLLMENT: {
    title: 'MFA Enrollment Page',
    path: '/auth/mfa-enrollment',
  },
  AUTH_PASSWORD_RESET: {
    title: 'Password Reset Page',
    path: '/auth/password-reset',
  },
  AUTH_SIGN_IN: {
    title: 'Sign In Page',
    path: '/auth/signin',
  },
  AUTH_SIGN_UP: {
    title: 'Sign Up Page',
    path: '/auth/signup',
  },
  ADMIN: {
    title: 'Page For Administrator',
    path: '/admin',
  },
} as const satisfies { [key in string]: { readonly path: string; title?: string } }
