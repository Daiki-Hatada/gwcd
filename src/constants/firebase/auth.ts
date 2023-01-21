export const FIREBASE_AUTH_PROVIDER = {
  GOOGLE: 'google.com',
  PASSWORD: 'password',
} as const

export const FIREBASE_AUTH_ACTION_MODE = {
  RESET_PASSWORD: 'resetPassword',
  RECOVER_EMAIL: 'recoverEmail',
  VERIFY_EMAIL: 'verifyEmail',
} as const

export const ADMIN_ERROR_CODE = {
  CLAIMS_TOO_LARGE: 'auth/claims-too-large',
  EMAIL_ALREADY_EXISTS: 'auth/email-already-exists',
  ID_TOKEN_EXPIRED: 'auth/id-token-expired',
  ID_TOKEN_REVOKED: 'auth/id-token-revoked',
  INSUFFICIENT_PERMISSION: 'auth/insufficient-permission',
  INTERNAL_ERROR: 'auth/internal-error',
  INVALID_ARGUMENT: 'auth/invalid-argument',
  INVALID_CLAIMS: 'auth/invalid-claims',
  INVALID_CONTINUE_URI: 'auth/invalid-continue-uri',
  INVALID_CREATION_TIME: 'auth/invalid-creation-time',
  INVALID_CREDENTIAL: 'auth/invalid-credential',
  INVALID_DISABLED_FIELD: 'auth/invalid-disabled-field',
  INVALID_DISPLAY_NAME: 'auth/invalid-display-name',
  INVALID_DYNAMIC_LINK_DOMAIN: 'auth/invalid-dynamic-link-domain',
  INVALID_EMAIL: 'auth/invalid-email',
  INVALID_EMAIL_VERIFIED: 'auth/invalid-email-verified',
  INVALID_HASH_ALGORITHM: 'auth/invalid-hash-algorithm',
  INVALID_HASH_BLOCK_SIZE: 'auth/invalid-hash-block-size',
  INVALID_HASH_DERIVED_KEY_LENGTH: 'auth/invalid-hash-derived-key-length',
  INVALID_HASH_KEY: 'auth/invalid-hash-key',
  INVALID_HASH_MEMORY_COST: 'auth/invalid-hash-memory-cost',
  INVALID_HASH_PARALLELIZATION: 'auth/invalid-hash-parallelization',
  INVALID_HASH_ROUNDS: 'auth/invalid-hash-rounds',
  INVALID_HASH_SALT_SEPARATOR: 'auth/invalid-hash-salt-separator',
  INVALID_ID_TOKEN: 'auth/invalid-id-token',
  INVALID_LAST_SIGN_IN_TIME: 'auth/invalid-last-sign-in-time',
  INVALID_PAGE_TOKEN: 'auth/invalid-page-token',
  INVALID_PASSWORD: 'auth/invalid-password',
  INVALID_PASSWORD_HASH: 'auth/invalid-password-hash',
  INVALID_PASSWORD_SALT: 'auth/invalid-password-salt',
  INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
  INVALID_PHOTO_URL: 'auth/invalid-photo-url',
  INVALID_PROVIDER_DATA: 'auth/invalid-provider-data',
  INVALID_PROVIDER_ID: 'auth/invalid-provider-id',
  INVALID_OAUTH_RESPONSETYPE: 'auth/invalid-oauth-responsetype',
  INVALID_SESSION_COOKIE_DURATION: 'auth/invalid-session-cookie-duration',
  INVALID_UID: 'auth/invalid-uid',
  INVALID_USER_IMPORT: 'auth/invalid-user-import',
  MAXIMUM_USER_COUNT_EXCEEDED: 'auth/maximum-user-count-exceeded',
  MISSING_ANDROID_PKG_NAME: 'auth/missing-android-pkg-name',
  MISSING_CONTINUE_URI: 'auth/missing-continue-uri',
  MISSING_HASH_ALGORITHM: 'auth/missing-hash-algorithm',
  MISSING_IOS_BUNDLE_ID: 'auth/missing-ios-bundle-id',
  MISSING_UID: 'auth/missing-uid',
  MISSING_OAUTH_CLIENT_SECRET: 'auth/missing-oauth-client-secret',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  PHONE_NUMBER_ALREADY_EXISTS: 'auth/phone-number-already-exists',
  PROJECT_NOT_FOUND: 'auth/project-not-found',
  RESERVED_CLAIMS: 'auth/reserved-claims',
  SESSION_COOKIE_EXPIRED: 'auth/session-cookie-expired',
  SESSION_COOKIE_REVOKED: 'auth/session-cookie-revoked',
  UID_ALREADY_EXISTS: 'auth/uid-already-exists',
  UNAUTHORIZED_CONTINUE_URI: 'auth/unauthorized-continue-uri',
  USER_NOT_FOUND: 'auth/user-not-found',
} as const

export const ERROR_CODE = {
  ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL: 'auth/account-exists-with-different-credential',
  ADMIN_RESTRICTED_OPERATION: 'auth/admin-restricted-operation',
  APP_DELETED: 'auth/app-deleted',
  APP_NOT_AUTHORIZED: 'auth/app-not-authorized',
  APP_NOT_INSTALLED: 'auth/app-not-installed',
  ARGUMENT_ERROR: 'auth/argument-error',
  AUTH_DOMAIN_CONFIG_REQUIRED: 'auth/auth-domain-config-required',
  CANCELLED_POPUP_REQUEST: 'auth/cancelled-popup-request',
  CAPTCHA_CHECK_FAILED: 'auth/captcha-check-failed',
  CODE_EXPIRED: 'auth/code-expired',
  CORDOVA_NOT_READY: 'auth/cordova-not-ready',
  CORS_UNSUPPORTED: 'auth/cors-unsupported',
  CREDENTIAL_ALREADY_IN_USE: 'auth/credential-already-in-use',
  CUSTOM_TOKEN_MISMATCH: 'auth/custom-token-mismatch',
  DYNAMIC_LINK_NOT_ACTIVATED: 'auth/dynamic-link-not-activated',
  EMAIL_ALREADY_IN_USE: 'auth/email-already-in-use',
  EMAIL_CHANGE_NEEDS_VERIFICATION: 'auth/email-change-needs-verification',
  EXPIRED_ACTION_CODE: 'auth/expired-action-code',
  INTERNAL_ERROR: 'auth/internal-error',
  INVALID_ACTION_CODE: 'auth/invalid-action-code',
  INVALID_API_KEY: 'auth/invalid-api-key',
  INVALID_APP_CREDENTIAL: 'auth/invalid-app-credential',
  INVALID_APP_ID: 'auth/invalid-app-id',
  INVALID_AUTH_EVENT: 'auth/invalid-auth-event',
  INVALID_CERT_HASH: 'auth/invalid-cert-hash',
  INVALID_CONTINUE_URI: 'auth/invalid-continue-uri',
  INVALID_CORDOVA_CONFIGURATION: 'auth/invalid-cordova-configuration',
  INVALID_CREDENTIAL: 'auth/invalid-credential',
  INVALID_CUSTOM_TOKEN: 'auth/invalid-custom-token',
  INVALID_DYNAMIC_LINK_DOMAIN: 'auth/invalid-dynamic-link-domain',
  INVALID_EMAIL: 'auth/invalid-email',
  INVALID_MESSAGE_PAYLOAD: 'auth/invalid-message-payload',
  INVALID_MULTI_FACTOR_SESSION: 'auth/invalid-multi-factor-session',
  INVALID_OAUTH_CLIENT_ID: 'auth/invalid-oauth-client-id',
  INVALID_OAUTH_PROVIDER: 'auth/invalid-oauth-provider',
  INVALID_PERSISTENCE_TYPE: 'auth/invalid-persistence-type',
  INVALID_PHONE_NUMBER: 'auth/invalid-phone-number',
  INVALID_PROVIDER_ID: 'auth/invalid-provider-id',
  INVALID_RECIPIENT_EMAIL: 'auth/invalid-recipient-email',
  INVALID_SENDER: 'auth/invalid-sender',
  INVALID_TENANT_ID: 'auth/invalid-tenant-id',
  INVALID_USER_TOKEN: 'auth/invalid-user-token',
  INVALID_VERIFICATION_CODE: 'auth/invalid-verification-code',
  INVALID_VERIFICATION_ID: 'auth/invalid-verification-id',
  MAXIMUM_SECOND_FACTOR_COUNT_EXCEEDED: 'auth/maximum-second-factor-count-exceeded',
  MISSING_ANDROID_PKG_NAME: 'auth/missing-android-pkg-name',
  MISSING_APP_CREDENTIAL: 'auth/missing-app-credential',
  MISSING_CONTINUE_URI: 'auth/missing-continue-uri',
  MISSING_IFRAME_START: 'auth/missing-iframe-start',
  MISSING_IOS_BUNDLE_ID: 'auth/missing-ios-bundle-id',
  MISSING_MULTI_FACTOR_INFO: 'auth/missing-multi-factor-info',
  MISSING_MULTI_FACTOR_SESSION: 'auth/missing-multi-factor-session',
  MISSING_OR_INVALID_NONCE: 'auth/missing-or-invalid-nonce',
  MISSING_PHONE_NUMBER: 'auth/missing-phone-number',
  MISSING_VERIFICATION_CODE: 'auth/missing-verification-code',
  MISSING_VERIFICATION_ID: 'auth/missing-verification-id',
  MULTI_FACTOR_AUTH_REQUIRED: 'auth/multi-factor-auth-required',
  MULTI_FACTOR_INFO_NOT_FOUND: 'auth/multi-factor-info-not-found',
  NETWORK_REQUEST_FAILED: 'auth/network-request-failed',
  NO_AUTH_EVENT: 'auth/no-auth-event',
  NO_SUCH_PROVIDER: 'auth/no-such-provider',
  NULL_USER: 'auth/null-user',
  OPERATION_NOT_ALLOWED: 'auth/operation-not-allowed',
  OPERATION_NOT_SUPPORTED_IN_THIS_ENVIRONMENT: 'auth/operation-not-supported-in-this-environment',
  POPUP_BLOCKED: 'auth/popup-blocked',
  POPUP_CLOSED_BY_USER: 'auth/popup-closed-by-user',
  PROVIDER_ALREADY_LINKED: 'auth/provider-already-linked',
  QUOTA_EXCEEDED: 'auth/quota-exceeded',
  REDIRECT_CANCELLED_BY_USER: 'auth/redirect-cancelled-by-user',
  REDIRECT_OPERATION_PENDING: 'auth/redirect-operation-pending',
  REJECTED_CREDENTIAL: 'auth/rejected-credential',
  REQUIRES_RECENT_LOGIN: 'auth/requires-recent-login',
  SECOND_FACTOR_ALREADY_IN_USE: 'auth/second-factor-already-in-use',
  TENANT_ID_MISMATCH: 'auth/tenant-id-mismatch',
  TIMEOUT: 'auth/timeout',
  TOO_MANY_REQUESTS: 'auth/too-many-requests',
  UNAUTHORIZED_CONTINUE_URI: 'auth/unauthorized-continue-uri',
  UNAUTHORIZED_DOMAIN: 'auth/unauthorized-domain',
  UNSUPPORTED_FIRST_FACTOR: 'auth/unsupported-first-factor',
  UNSUPPORTED_PERSISTENCE_TYPE: 'auth/unsupported-persistence-type',
  UNSUPPORTED_TENANT_OPERATION: 'auth/unsupported-tenant-operation',
  UNVERIFIED_EMAIL: 'auth/unverified-email',
  USER_CANCELLED: 'auth/user-cancelled',
  USER_DISABLED: 'auth/user-disabled',
  USER_MISMATCH: 'auth/user-mismatch',
  USER_NOT_FOUND: 'auth/user-not-found',
  USER_SIGNED_OUT: 'auth/user-signed-out',
  USER_TOKEN_EXPIRED: 'auth/user-token-expired',
  WEAK_PASSWORD: 'auth/weak-password',
  WEB_STORAGE_UNSUPPORTED: 'auth/web-storage-unsupported',
  WRONG_PASSWORD: 'auth/wrong-password',
} as const

// auth/claims-too-large: The claims payload provided to setCustomUserClaims() exceeds the maximum allowed size of 1000 bytes.
// auth/email-already-exists: The provided email is already in use by an existing user. Each user must have a unique email.
// auth/id-token-expired: The provided Firebase ID token is expired.
// auth/id-token-revoked: The Firebase ID token has been revoked.
// auth/insufficient-permission: The credential used to initialize the Admin SDK has insufficient permission to access the requested Authentication resource. Refer to Set up a Firebase project for documentation on how to generate a credential with appropriate permissions and use it to authenticate the Admin SDKs.
// auth/internal-error: The Authentication server encountered an unexpected error while trying to process the request. The error message should contain the response from the Authentication server containing additional information. If the error persists, please report the problem to our Bug Report support channel.
// auth/invalid-argument: An invalid argument was provided to an Authentication method. The error message should contain additional information.
// auth/invalid-claims: The custom claim attributes provided to setCustomUserClaims() are invalid.
// auth/invalid-continue-uri: The continue URL must be a valid URL string.
// auth/invalid-creation-time: The creation time must be a valid UTC date string.
// auth/invalid-credential: The credential used to authenticate the Admin SDKs cannot be used to perform the desired action. Certain Authentication methods such as createCustomToken() and verifyIdToken() require the SDK to be initialized with a certificate credential as opposed to a refresh token or Application Default credential. See Initialize the SDK for documentation on how to authenticate the Admin SDKs with a certificate credential.
// auth/invalid-disabled-field: The provided value for the disabled user property is invalid. It must be a boolean.
// auth/invalid-display-name: The provided value for the displayName user property is invalid. It must be a non-empty string.
// auth/invalid-dynamic-link-domain: The provided dynamic link domain is not configured or authorized for the current project.
// auth/invalid-email: The provided value for the email user property is invalid. It must be a string email address.
// auth/invalid-email-verified: The provided value for the emailVerified user property is invalid. It must be a boolean.
// auth/invalid-hash-algorithm: The hash algorithm must match one of the strings in the list of supported algorithms.
// auth/invalid-hash-block-size: The hash block size must be a valid number.
// auth/invalid-hash-derived-key-length: The hash derived key length must be a valid number.
// auth/invalid-hash-key: The hash key must a valid byte buffer.
// auth/invalid-hash-memory-cost: The hash memory cost must be a valid number.
// auth/invalid-hash-parallelization: The hash parallelization must be a valid number.
// auth/invalid-hash-rounds: The hash rounds must be a valid number.
// auth/invalid-hash-salt-separator: The hashing algorithm salt separator field must be a valid byte buffer.
// auth/invalid-id-token: The provided ID token is not a valid Firebase ID token.
// auth/invalid-last-sign-in-time: The last sign-in time must be a valid UTC date string.
// auth/invalid-page-token: The provided next page token in listUsers() is invalid. It must be a valid non-empty string.
// auth/invalid-password: The provided value for the password user property is invalid. It must be a string with at least six characters.
// auth/invalid-password-hash: The password hash must be a valid byte buffer.
// auth/invalid-password-salt: The password salt must be a valid byte buffer
// auth/invalid-phone-number: The provided value for the phoneNumber is invalid. It must be a non-empty E.164 standard compliant identifier string.
// auth/invalid-photo-url: The provided value for the photoURL user property is invalid. It must be a string URL.
// auth/invalid-provider-data: The providerData must be a valid array of UserInfo objects.
// auth/invalid-provider-id: The providerId must be a valid supported provider identifier string.
// auth/invalid-oauth-responsetype: Only exactly one OAuth responseType should be set to true.
// auth/invalid-session-cookie-duration: The session cookie duration must be a valid number in milliseconds between 5 minutes and 2 weeks.
// auth/invalid-uid: The provided uid must be a non-empty string with at most 128 characters.
// auth/invalid-user-import: The user record to import is invalid.
// auth/maximum-user-count-exceeded: The maximum allowed number of users to import has been exceeded.
// auth/missing-android-pkg-name: An Android Package Name must be provided if the Android App is required to be installed.
// auth/missing-continue-uri: A valid continue URL must be provided in the request.
// auth/missing-hash-algorithm: Importing users with password hashes requires that the hashing algorithm and its parameters be provided.
// auth/missing-ios-bundle-id: The request is missing a Bundle ID.
// auth/missing-uid: A uid identifier is required for the current operation.
// auth/missing-oauth-client-secret: The OAuth configuration client secret is required to enable OIDC code flow.
// auth/operation-not-allowed: The provided sign-in provider is disabled for your Firebase project. Enable it from the Sign-in Method section of the Firebase console.
// auth/phone-number-already-exists: The provided phoneNumber is already in use by an existing user. Each user must have a unique phoneNumber.
// auth/project-not-found: No Firebase project was found for the credential used to initialize the Admin SDKs. Refer to Set up a Firebase project for documentation on how to generate a credential for your project and use it to authenticate the Admin SDKs.
// auth/reserved-claims: One or more custom user claims provided to setCustomUserClaims() are reserved. For example, OIDC specific claims such as (sub, iat, iss, exp, aud, auth_time, etc) should not be used as keys for custom claims.
// auth/session-cookie-expired: The provided Firebase session cookie is expired.
// auth/session-cookie-revoked: The Firebase session cookie has been revoked.
// auth/uid-already-exists: The provided uid is already in use by an existing user. Each user must have a unique uid.
// auth/unauthorized-continue-uri: The domain of the continue URL is not whitelisted. Whitelist the domain in the Firebase Console.
// auth/user-not-found: There is no existing user record corresponding to the provided identifier.

// ACCOUNT_EXISTS_WITH_DIFFERENT_CREDENTIAL: "auth/admin-restricted-operation": "This operation is restricted to administrators only.",
// ADMIN_RESTRICTED_OPERATION: "auth/argument-error": "auth/",
// APP_DELETED: "auth/app-not-authorized": "This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",
// APP_NOT_AUTHORIZED: "auth/app-not-installed": "The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",
// APP_NOT_INSTALLED: "auth/captcha-check-failed": "The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",
// ARGUMENT_ERROR: "auth/code-expired": "The SMS code has expired. Please re-send the verification code to try again.",
// AUTH_DOMAIN_CONFIG_REQUIRED: "auth/cordova-not-ready": "Cordova framework is not ready.",
// CANCELLED_POPUP_REQUEST: "auth/cors-unsupported": "This browser is not supported.",
// CAPTCHA_CHECK_FAILED: "auth/credential-already-in-use": "This credential is already associated with a different user account.",
// CODE_EXPIRED: "auth/custom-token-mismatch": "The custom token corresponds to a different audience.",
// CORDOVA_NOT_READY: "auth/requires-recent-login": "This operation is sensitive and requires recent authentication. Log in again before retrying this request.",
// CORS_UNSUPPORTED: "auth/dynamic-link-not-activated": "Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",
// CREDENTIAL_ALREADY_IN_USE: "auth/email-change-needs-verification": "Multi-factor users must always have a verified email.",
// CUSTOM_TOKEN_MISMATCH: "auth/email-already-in-use": "The email address is already in use by another account.",
// DYNAMIC_LINK_NOT_ACTIVATED: "auth/expired-action-code": "The action code has expired. ",
// EMAIL_ALREADY_IN_USE: "auth/cancelled-popup-request": "This operation has been cancelled due to another conflicting popup being opened.",
// EMAIL_CHANGE_NEEDS_VERIFICATION: "auth/internal-error": "An internal error has occurred.",
// EXPIRED_ACTION_CODE: "auth/invalid-app-credential": "The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",
// INTERNAL_ERROR: "auth/invalid-app-id": "The mobile app identifier is not registed for the current project.",
// INVALID_ACTION_CODE: "auth/invalid-user-token": "This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",
// INVALID_API_KEY: "auth/invalid-auth-event": "An internal error has occurred.",
// INVALID_APP_CREDENTIAL: "auth/invalid-verification-code": "The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.",
// INVALID_APP_ID: "auth/invalid-continue-uri": "The continue URL provided in the request is invalid.",
// INVALID_AUTH_EVENT: "auth/invalid-cordova-configuration": "The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",
// INVALID_CERT_HASH: "auth/invalid-custom-token": "The custom token format is incorrect. Please check the documentation.",
// INVALID_CONTINUE_URI: "auth/invalid-dynamic-link-domain": "The provided dynamic link domain is not configured or authorized for the current project.",
// INVALID_CORDOVA_CONFIGURATION: "auth/invalid-email": "The email address is badly formatted.",
// INVALID_CREDENTIAL: "auth/invalid-api-key": "Your API key is invalid, please check you have copied it correctly.",
// INVALID_CUSTOM_TOKEN: "auth/invalid-cert-hash": "The SHA-1 certificate hash provided is invalid.",
// INVALID_DYNAMIC_LINK_DOMAIN: "auth/invalid-credential": "The supplied auth credential is malformed or has expired.",
// INVALID_EMAIL: "auth/invalid-message-payload": "The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",
// INVALID_MESSAGE_PAYLOAD: "auth/invalid-multi-factor-session": "The request does not contain a valid proof of first factor successful sign-in.",
// INVALID_MULTI_FACTOR_SESSION: "auth/invalid-oauth-provider": "EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",
// INVALID_OAUTH_CLIENT_ID: "auth/invalid-oauth-client-id": "The OAuth client ID provided is either invalid or does not match the specified API key.",
// INVALID_OAUTH_PROVIDER: "auth/unauthorized-domain": "This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",
// INVALID_PERSISTENCE_TYPE: "auth/invalid-action-code": "The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",
// INVALID_PHONE_NUMBER: "auth/wrong-password": "The password is invalid or the user does not have a password.",
// INVALID_PROVIDER_ID: "auth/invalid-persistence-type": "The specified persistence type is invalid. It can only be local, session or none.",
// INVALID_RECIPIENT_EMAIL: "auth/invalid-phone-number": "The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",
// INVALID_SENDER: "auth/invalid-provider-id": "The specified provider ID is invalid.",
// INVALID_TENANT_ID: "auth/invalid-recipient-email": "The email corresponding to this action failed to send as the provided recipient email address is invalid.",
// INVALID_USER_TOKEN: "auth/invalid-sender": "The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",
// INVALID_VERIFICATION_CODE: "auth/invalid-verification-id": "The verification ID used to create the phone auth credential is invalid.",
// INVALID_VERIFICATION_ID: "auth/invalid-tenant-id": "The Auth instance's tenant ID is invalid.",
// MAXIMUM_SECOND_FACTOR_COUNT_EXCEEDED: "auth/multi-factor-info-not-found": "The user does not have a second factor matching the identifier provided.",
// MISSING_ANDROID_PKG_NAME: "auth/multi-factor-auth-required": "Proof of ownership of a second factor is required to complete sign-in.",
// MISSING_APP_CREDENTIAL: "auth/missing-android-pkg-name": "An Android Package Name must be provided if the Android App is required to be installed.",
// MISSING_CONTINUE_URI: "auth/auth-domain-config-required": "Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",
// MISSING_IFRAME_START: "auth/missing-app-credential": "The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",
// MISSING_IOS_BUNDLE_ID: "auth/missing-verification-code": "The phone auth credential was created with an empty SMS verification code.",
// MISSING_MULTI_FACTOR_INFO: "auth/missing-continue-uri": "A continue URL must be provided in the request.",
// MISSING_MULTI_FACTOR_SESSION: "auth/missing-iframe-start": "An internal error has occurred.",
// MISSING_OR_INVALID_NONCE: "auth/missing-ios-bundle-id": "An iOS Bundle ID must be provided if an App Store ID is provided.",
// MISSING_PHONE_NUMBER: "auth/missing-multi-factor-info": "No second factor identifier is provided.",
// MISSING_VERIFICATION_CODE: "auth/missing-multi-factor-session": "The request is missing proof of first factor successful sign-in.",
// MISSING_VERIFICATION_ID: "auth/missing-or-invalid-nonce": "The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",
// MULTI_FACTOR_AUTH_REQUIRED: "auth/missing-phone-number": "To send verification codes, provide a phone number for the recipient.",
// MULTI_FACTOR_INFO_NOT_FOUND: "auth/missing-verification-id": "The phone auth credential was created with an empty verification ID.",
// NETWORK_REQUEST_FAILED: "auth/app-deleted": "This instance of FirebaseApp has been deleted.",
// NO_AUTH_EVENT: "auth/account-exists-with-different-credential": "An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",
// NO_SUCH_PROVIDER: "auth/network-request-failed": "A network error (such as timeout, interrupted connection or unreachable host) has occurred.",
// NULL_USER: "auth/no-auth-event": "An internal error has occurred.",
// OPERATION_NOT_ALLOWED: "auth/no-such-provider": "User was not linked to an account with the given provider.",
// OPERATION_NOT_SUPPORTED_IN_THIS_ENVIRONMENT: "auth/null-user": "A null user object was provided as the argument for an operation which requires a non-null user object.",
// POPUP_BLOCKED: "auth/operation-not-allowed": "The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",
// POPUP_CLOSED_BY_USER: "auth/operation-not-supported-in-this-environment": "This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',
// PROVIDER_ALREADY_LINKED: "auth/popup-blocked": "Unable to establish a connection with the popup. It may have been blocked by the browser.",
// QUOTA_EXCEEDED: "auth/popup-closed-by-user": "The popup has been closed by the user before finalizing the operation.",
// REDIRECT_CANCELLED_BY_USER: "auth/provider-already-linked": "User can only be linked to one identity for the given provider.",
// REDIRECT_OPERATION_PENDING: "auth/quota-exceeded": "The project's quota for this operation has been exceeded.",
// REJECTED_CREDENTIAL: "auth/redirect-cancelled-by-user": "The redirect operation has been cancelled by the user before finalizing.",
// REQUIRES_RECENT_LOGIN: "auth/redirect-operation-pending": "A redirect sign-in operation is already pending.",
// SECOND_FACTOR_ALREADY_IN_USE: "auth/rejected-credential": "The request contains malformed or mismatching credentials.",
// TENANT_ID_MISMATCH: "auth/second-factor-already-in-use": "The second factor is already enrolled on this account.",
// TIMEOUT: "auth/maximum-second-factor-count-exceeded": "The maximum allowed number of second factors on a user has been exceeded.",
// TOO_MANY_REQUESTS: "auth/tenant-id-mismatch": "The provided tenant ID does not match the Auth instance's tenant ID",
// UNAUTHORIZED_CONTINUE_URI: "auth/timeout": "The operation has timed out.",
// UNAUTHORIZED_DOMAIN: "auth/user-token-expired": "The user's credential is no longer valid. The user must sign in again.",
// UNSUPPORTED_FIRST_FACTOR: "auth/too-many-requests": "We have blocked all requests from this device due to unusual activity. Try again later.",
// UNSUPPORTED_PERSISTENCE_TYPE: "auth/unauthorized-continue-uri": "The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",
// UNSUPPORTED_TENANT_OPERATION: "auth/unsupported-first-factor": "Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",
// UNVERIFIED_EMAIL: "auth/unsupported-persistence-type": "The current environment does not support the specified persistence type.",
// USER_CANCELLED: "auth/unsupported-tenant-operation": "This operation is not supported in a multi-tenant context.",
// USER_DISABLED: "auth/unverified-email": "The operation requires a verified email.",
// USER_MISMATCH: "auth/user-cancelled": "The user did not grant your application the permissions it requested.",
// USER_NOT_FOUND: "auth/user-not-found": "There is no user record corresponding to this identifier. The user may have been deleted.",
// USER_SIGNED_OUT: "auth/user-disabled": "The user account has been disabled by an administrator.",
// USER_TOKEN_EXPIRED: "auth/user-mismatch": "The supplied credentials do not correspond to the previously signed in user.",
// WEAK_PASSWORD: "auth/user-signed-out": "auth/",
// WEB_STORAGE_UNSUPPORTED: "auth/weak-password": "The password must be 6 characters long or more.",
// WRONG_PASSWORD: "auth/web-storage-unsupported": "This browser is not supported or 3rd party cookies and data may be disabled."
