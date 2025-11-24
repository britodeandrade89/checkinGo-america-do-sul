
import type { UserConfig } from './types';

export const USER_CONFIG: UserConfig = {
    origins: ['GRU', 'GIG', 'CNF'],
    destinations: ['BPS'],
    whatsapp_numbers: ['+5521994527694', '+5521967099550'],
    travel_period: {
        start: '2025-12-20',
        end: '2026-01-31',
        min_days: 7,
        max_days: 15
    }
};