const activityPubPlugin = require('eleventy-plugin-activity-pub');

export default async function(eleventyConfig) {
	// Configure Eleventy
	eleventyConfig.addPlugin(activityPubPlugin, {
		domain: 'kissmaelis.com',
		username: 'maelis',
		displayName: 'Maelis Gast',
		summary: 'My website on the fediverse!',
	});
};