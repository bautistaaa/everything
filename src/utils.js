function stringify(str, fancy) {
  return JSON.stringify(str, null, fancy ? 2 : 0);
}

function getPkgJsonData(packageName) {
  return {
    description: `npm install ${packageName}`,
    main: 'index.js',
    contributors: [
      'PatrickJS <github@patrickjs.com>',
      'uncenter <hi@uncenter.dev>',
      'ChatGPT <chatgpt@openai.com>',
      'trash <trash@trash.dev>',
    ],
    scripts: {},
    keywords: ['everything', 'allthethings', 'everymodule'].filter(Boolean),
    license: 'MIT',
    homepage: 'https://github.com/everything-registry/everything',
  };
}

module.exports = {
  stringify,
  getPkgJsonData,
};
