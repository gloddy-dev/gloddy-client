export const AUTH_ERROR_CODES = {
  /* 올바르지 않은 토큰 | 토큰이 비어짐 | 토큰 만료 => 토큰 재발급 */
  TOKEN_ERROR: 403,
  /* 유효하지 않은 토큰 => 회원가입 페이지로 이동 */
  UNAUTHORIZED: 401,
  /* 존재하지 않는 유저 => 회원가입 페이지로 이동 */
  NOT_FOUND: 404,
} as const;
