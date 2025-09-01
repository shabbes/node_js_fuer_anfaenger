export default class ModelSetup {
  static async install(sequelize, modules) {
    const modelMap = {};

    for (const module of modules) {
      if (Array.isArray(module.models)) {
        for (const model of module.models) {
          model.register(sequelize);

          modelMap[model.name] = model;
        }
      }
    }

    for (const model of Object.values(modelMap)) {
      if (typeof model.associate === 'function') {
        model.associate(modelMap);
      }
    }

    await sequelize.sync();
  }
}
