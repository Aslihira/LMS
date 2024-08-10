import { Test, TestingModule } from '@nestjs/testing';
import { InterestDistributionController } from './interest-distribution.controller';

describe('InterestDistributionController', () => {
  let controller: InterestDistributionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterestDistributionController],
    }).compile();

    controller = module.get<InterestDistributionController>(InterestDistributionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
