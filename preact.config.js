// preact.config.js
import dotenv from 'dotenv';

dotenv.config();

export default (config, env, helpers) => {
    const { plugin } = helpers.getPluginsByName(config, 'DefinePlugin')[0];
    plugin.definitions['process.env.CONTENTFUL_ACCESS_TOKEN'] = JSON.stringify(process.env.CONTENTFUL_ACCESS_TOKEN);
    plugin.definitions['process.env.CONTENTFUL_SPACE_ID'] = JSON.stringify(process.env.CONTENTFUL_SPACE_ID);
}
