import type { Options } from '@wdio/types'
import { config  as baseConfig} from "./wdio.conf";

export const config: Options.Testrunner = {
    ...baseConfig,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
        acceptInsecureCerts: true,
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu']
        }
    }],
}

