export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".DS_Store","images/3ds-light.png","logos/mehul-light.svg","logos/portrait_line_art.png","logos/retcon.svg","logos/vista.png","portfolio.yaml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".yaml":"text/yaml"},
	_: {
		entry: {"file":"_app/immutable/start-3c8d4ac2.js","imports":["_app/immutable/start-3c8d4ac2.js","_app/immutable/chunks/index-ceb9c920.js","_app/immutable/chunks/singletons-3bbc1ec7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
