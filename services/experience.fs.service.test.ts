import { experienceService } from './experience.fs.service';

describe('Experience Service integration tests', () => {
    const service = experienceService;

    it('should get experience documents', async () => {
        await service.get();
        // TODO
    });
});
