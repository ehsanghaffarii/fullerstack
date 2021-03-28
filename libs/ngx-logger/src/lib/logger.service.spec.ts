import { TestBed, getTestBed } from '@angular/core/testing';
import { ApplicationCfg, CfgModule } from '@fullerstack/ngx-cfg';
import { LogLevels } from './logger.models';
import { LoggerModule } from './logger.module';
import { LoggerService } from './logger.service';
import { HttpClientModule } from '@angular/common/http';

const applicationCfg: ApplicationCfg = {
  version: '1.0.0',
  appName: '@fullerstack/ngx-logger',
  production: false,
};

// disable console log/warn during test
jest.spyOn(console, 'log').mockImplementation(() => undefined);
jest.spyOn(console, 'warn').mockImplementation(() => undefined);

describe('LoggerService: Loads default values, disabled', () => {
  let service: LoggerService;
  let testbed: TestBed;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CfgModule.forRoot(applicationCfg),
        LoggerModule.forRoot(),
      ],
    });

    testbed = getTestBed();
    service = testbed.inject(LoggerService);
  });

  afterAll(() => {
    testbed = null;
    service = null;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have the app config options', () => {
    expect(service.options.appName).toBe(applicationCfg.appName);
  });

  it('should have the module default config options', () => {
    expect(service.options.logger.level).toBe(LogLevels.none);
  });

  it('should not log anything as the level is none', () => {
    const consoleLog = spyOn(console, 'log');
    service.critical('Logging a critical');
    service.error('Logging a error');
    service.info('Logging a info');
    service.debug('Logging a debug');
    service.trace('Logging a trace');
    expect(consoleLog).not.toHaveBeenCalled();
  });
});

describe('LoggerService: LogLevel tracing enabled', () => {
  let service: LoggerService;
  let testbed: TestBed;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CfgModule.forRoot({
          ...applicationCfg,
          logger: { level: LogLevels.trace },
        }),
        LoggerModule.forRoot(),
      ],
    });

    testbed = getTestBed();
    service = testbed.inject(LoggerService);
  });

  afterAll(() => {
    testbed = null;
    service = null;
  });

  it('should log everything above, and including tracing', () => {
    const consoleLog = spyOn(console, 'log');
    service.critical('Logging a critical');
    service.error('Logging a error');
    service.info('Logging a info');
    service.debug('Logging a debug');
    service.trace('Logging a trace');
    expect(consoleLog).toHaveBeenCalledTimes(5);
  });
});

describe('LoggerService: LogLevel debug enabled', () => {
  let service: LoggerService;
  let testbed: TestBed;

  beforeAll(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        CfgModule.forRoot({
          ...applicationCfg,
          logger: { level: LogLevels.debug },
        }),
        LoggerModule.forRoot(),
      ],
    });

    testbed = getTestBed();
    service = testbed.inject(LoggerService);
  });

  afterAll(() => {
    testbed = null;
    service = null;
  });

  it('should log everything above, and including debug', () => {
    console.log(service.options);
    const consoleLog = spyOn(console, 'log');
    service.critical('Logging a critical');
    service.error('Logging a error');
    service.info('Logging a info');
    service.debug('Logging a debug');
    service.trace('Logging a trace');
    expect(consoleLog).toHaveBeenCalledTimes(4);
  });
});
