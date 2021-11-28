import { AdminModule } from './admin.module';

describe('BlankPageModule', () => {
    let blankPageModule: AdminModule;

    beforeEach(() => {
        blankPageModule = new AdminModule();
    });

    it('should create an instance', () => {
        expect(AdminModule).toBeTruthy();
    });
});
