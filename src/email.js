// WHATWG HTML 표준 권장 이메일 검증 정규식
// 출처: https://html.spec.whatwg.org/multipage/input.html#e-mail-state-(type=email)
//
// ABNF (RFC 1123 확장 포함):
//   email = 1*( atext / "." ) "@" label *( "." label )
//   atext = RFC 5322 §3.2.3 — https://www.rfc-editor.org/rfc/rfc5322#section-3.2.3
//   label = RFC 1034 §3.5 — https://www.rfc-editor.org/rfc/rfc1034#section-3.5
//
// RFC 5322 전체 문법은 주석·따옴표 문자열 등으로 실용성이 떨어져
// WHATWG가 "willful violation"으로 위 ABNF를 채택했다.
const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * 사용자 배열에서 email 필드 값을 추출한다.
 * @param {unknown} users - 사용자 객체 배열
 * @returns {unknown[]} 추출된 email 값 배열
 */
export function extractEmails(users) {
    if (!Array.isArray(users)) {
        return [];
    }
    return users.map(user => user.email);
}

/**
 * 이메일 주소 형식이 유효한지 검사한다.
 * WHATWG HTML 표준 §4.10.5.1.5 정규식을 사용한다 (RFC 5322 atext + RFC 1034 도메인).
 * @param {unknown} email - 검사할 값
 * @returns {boolean} 유효하면 true
 * @see https://html.spec.whatwg.org/multipage/input.html#e-mail-state-(type=email)
 */
export function isValidEmail(email) {
    if (typeof email !== 'string') return false;
    return EMAIL_REGEX.test(email);
}

/**
 * 사용자 배열에서 유효한 이메일 주소만 추출한다.
 * @param {Array<{ email: string }>} users - 사용자 객체 배열
 * @returns {string[]} 유효한 이메일 주소 배열
 */
export function getValidEmails(users) {
    return extractEmails(users).filter(isValidEmail);
}

/**
 * 이메일 주소에서 @ 뒤의 도메인을 추출한다.
 * @param {unknown} email - 이메일 주소
 * @returns {string|null} 도메인 문자열. 유효하지 않은 이메일이면 null
 */
export function getEmailDomain(email) {
    if (!isValidEmail(email)) {
        return null;
    }
    return email.split('@')[1];
}
