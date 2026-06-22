import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
    extractEmails,
    isValidEmail,
    getValidEmails,
    getEmailDomain,
} from './email.js';

describe('extractEmails', () => {
    it('returns emails from a user array', () => {
        const users = [{ email: 'a@b.com' }, { email: 'c@d.com' }];
        assert.deepEqual(extractEmails(users), ['a@b.com', 'c@d.com']);
    });

    it('returns an empty array for non-array input', () => {
        assert.deepEqual(extractEmails(null), []);
        assert.deepEqual(extractEmails(undefined), []);
    });
});

describe('isValidEmail', () => {
    it('returns true for valid email strings', () => {
        assert.equal(isValidEmail('user@example.com'), true);
        assert.equal(isValidEmail('user+tag@example.com'), true);
        assert.equal(isValidEmail('user.name@sub.example.co.uk'), true);
    });

    it('returns false for invalid values', () => {
        assert.equal(isValidEmail('not-an-email'), false);
        assert.equal(isValidEmail(''), false);
        assert.equal(isValidEmail(null), false);
        assert.equal(isValidEmail('@example.com'), false);
        assert.equal(isValidEmail('user @example.com'), false);
    });
});

describe('getValidEmails', () => {
    it('returns only valid emails from users', () => {
        const users = [
            { email: 'good@example.com' },
            { email: 'bad' },
            { email: 'also@good.org' },
        ];
        assert.deepEqual(getValidEmails(users), ['good@example.com', 'also@good.org']);
    });

    it('returns an empty array when no emails are valid', () => {
        const users = [{ email: 'bad' }, { email: 123 }];
        assert.deepEqual(getValidEmails(users), []);
    });
});

describe('getEmailDomain', () => {
    it('returns the domain from a valid email', () => {
        assert.equal(getEmailDomain('user@example.com'), 'example.com');
        assert.equal(getEmailDomain('user.name@sub.example.co.uk'), 'sub.example.co.uk');
    });

    it('returns null for invalid email', () => {
        assert.equal(getEmailDomain('not-an-email'), null);
        assert.equal(getEmailDomain(null), null);
    });
});
