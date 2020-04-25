import { experienceService } from './experience.db.service';

describe('Experience Service', () => {
    it('should get experience data', async () => {
        await experienceService.get();
    });
});
