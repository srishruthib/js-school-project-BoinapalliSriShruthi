var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// src/index.ts
import { fetchEvents } from './fetcher';
import { createEventElement } from './renderer';
import { setupModal } from './modal/setupModal';
import { showEventModal } from './modal/showEventModal';
document.addEventListener('DOMContentLoaded', () => __awaiter(void 0, void 0, void 0, function* () {
    const timeline = document.getElementById('timeline');
    const modal = document.getElementById('modal');
    if (!timeline || !modal)
        return;
    setupModal(modal);
    try {
        const events = yield fetchEvents();
        events.forEach(event => {
            const element = createEventElement(event);
            element.addEventListener('click', () => showEventModal(modal, event));
            timeline.appendChild(element);
        });
    }
    catch (error) {
        timeline.innerHTML = '<p>Failed to load events. Please try again later.</p>';
    }
}));
