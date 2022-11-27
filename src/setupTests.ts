// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// mock some commonly used browser API/modules/functions
window.confirm = jest.fn();

const originalLocationStorage = window.localStorage;
class LocalStorage {
    store: Record<string, string> = {};

    setItem = (key: string, val: string) => (this.store[key] = val);

    getItem = (key: string) => this.store[key];

    removeItem = (key: string) => {
        delete this.store[key];
    };

    clear = () => (this.store = {});
}

// for tests, use the above defined mock LocalStorage class
Object.defineProperty(window, 'localStorage', {
    value: new LocalStorage(),
});

// after tests are done, set window.localStorage to its original
afterAll(() => {
    Object.defineProperty(window, 'localStorage', {
        value: originalLocationStorage,
    });
});
