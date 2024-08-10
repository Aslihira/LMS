import { Test, TestingModule } from '@nestjs/testing';
import { NpaManagementController } from './npa-management.controller';

describe('NpaManagementController', () => {
  let controller: NpaManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NpaManagementController],
    }).compile();

    controller = module.get<NpaManagementController>(NpaManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
