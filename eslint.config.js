import { michaelcozzolino } from '@michaelcozzolino/eslint-config';

export default michaelcozzolino().append({
    ignores: ['**/*.md/**'],
}, {
    files: ['**/*.json'],
    rules: {
        'align-import/align-import': 'off',
        'align-import/trim-import':  'off',
    },
}, {
    files: ['**/*.yml', '**/*.yaml'],
    rules: {
        'style/no-multi-spaces': 'off',
    },
});
