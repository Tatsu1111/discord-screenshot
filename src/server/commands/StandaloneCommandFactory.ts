import CommandFactory from './CommandFactory';

import Command from './Command';
import StandaloneScreenshotCommand from './StandaloneScreenshotCommand';

import WebhookClient from '../discord/WebhookClient';
import Screenshoter from '../screenshot/Screenshoter';

class StandaloneCommandFactory implements CommandFactory {
    public createScreenshotCommand(name: string, permission: string, webhookClient: WebhookClient, screenshoter: Screenshoter): Command {
        return new StandaloneScreenshotCommand(name, permission, webhookClient, screenshoter);
    }
}

export default StandaloneCommandFactory;
