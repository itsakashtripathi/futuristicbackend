const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        options: {
            useUTC: false,
            timezone: "+05:30",
        },
        timezone: "+05:30",
    },
    timezone: "+05:30",
    pool: {
        max: 20,
        min: 0,
        acquire: 60000,
        idle: 10000
    }
});

sequelize.authenticate().then(() => {
    console.log('DB Connection has been established successfully.');
}).catch((err) => {
    console.log('Unable to connect to the database: ', err);
})

sequelize.sync();

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.recepie = require('./Recepie')(sequelize, Sequelize);
// db.role = require('./Role')(sequelize, Sequelize);
// db.branch = require('./Branch')(sequelize, Sequelize);
// db.driverEntryLogs = require('./DriverEntryLogs')(sequelize, Sequelize);
// db.truckQuestion = require('./TruckQuestion')(sequelize, Sequelize);
// db.truckEntryLogs = require('./TruckEntryLogs')(sequelize, Sequelize);
// db.truckQNA = require('./TruckQNA')(sequelize, Sequelize);
// db.answer = require('./Answer')(sequelize, Sequelize);
// db.otp = require('./Otp')(sequelize, Sequelize);
// db.aadhaarCard = require('./AadhaarCard')(sequelize, Sequelize);
// db.drivingLicence = require('./DrivingLicence')(sequelize, Sequelize);
// db.userDocuments = require('./UserDocuments')(sequelize, Sequelize);
// db.truck = require('./Truck')(sequelize, Sequelize);
// db.permit = require('./Permit')(sequelize, Sequelize);
// db.pucc = require('./Pucc')(sequelize, Sequelize);
// db.truckInsurance = require('./TruckInsurance')(sequelize, Sequelize);
// db.truckRegistration = require('./TruckRegistration')(sequelize, Sequelize);
// db.truckDocuments = require('./TruckDocuments')(sequelize, Sequelize);
// db.userTruck = require('./UserTruck')(sequelize, Sequelize);
// db.safetyDetails = require('./SafetyDetails')(sequelize, Sequelize);
// db.language = require('./Language')(sequelize, Sequelize);
// db.validAnswers = require('./ValidAnswers')(sequelize, Sequelize);
// db.module = require('./Module')(sequelize, Sequelize);
// db.video = require('./Video')(sequelize, Sequelize);
// db.audio = require('./Audio')(sequelize, Sequelize);
// db.videoLangAudio = require('./VideoLangAudio')(sequelize, Sequelize);
// db.question = require('./Question')(sequelize, Sequelize);
// db.options = require('./Options')(sequelize, Sequelize);
// db.resolver = require('./Resolver')(sequelize, Sequelize);
// db.moduleAnswer = require('./ModuleAnswer')(sequelize, Sequelize);
// db.translator = require('./Translator')(sequelize, Sequelize);
// db.moduleResponse = require('./ModuleResponse')(sequelize, Sequelize);
// db.journey = require('./Journey')(sequelize, Sequelize);
// db.route = require('./Routes')(sequelize, Sequelize);
// db.image = require('./Image')(sequelize, Sequelize);
// db.pdf = require('./Pdf')(sequelize, Sequelize);
// db.routeModules = require('./RouteModules')(sequelize, Sequelize);
// db.location = require('./Location')(sequelize, Sequelize);
// db.destinationModules = require('./DestinationModules')(sequelize, Sequelize);
// db.userTruckLogs = require('./UserTruckLogs')(sequelize, Sequelize);
// db.notifications = require('./Notifications')(sequelize, Sequelize);
// db.loginLogs = require('./LoginLogs')(sequelize, Sequelize);
// db.version = require('./Version')(sequelize, Sequelize);
// db.destinationModulesHistory = require('./DestinationModulesHistory')(sequelize, Sequelize);
// db.journeyNotifications = require('./JourneyNotifications')(sequelize, Sequelize);
// db.insurance = require('./Insurance')(sequelize, Sequelize);
// db.transporter = require('./Transporter')(sequelize, Sequelize);

// db.role.hasMany(db.user);
// db.user.belongsTo(db.role);
// db.driverEntryLogs.hasOne(db.truckEntryLogs);
// db.truckEntryLogs.belongsTo(db.driverEntryLogs);
// db.truckEntryLogs.hasOne(db.truckQNA);
// db.truckQNA.belongsTo(db.truckEntryLogs);
// db.truckQuestion.hasMany(db.truckQNA);
// db.truckQNA.belongsTo(db.truckQuestion);
// db.answer.hasMany(db.truckQNA);
// db.truckQNA.belongsTo(db.answer);
// db.user.hasMany(db.user, { foreignKey: 'created_by' });
// db.user.hasOne(db.userDocuments);
// db.userDocuments.belongsTo(db.user);
// db.aadhaarCard.hasOne(db.userDocuments);
// db.userDocuments.belongsTo(db.aadhaarCard);
// db.drivingLicence.hasOne(db.userDocuments);
// db.userDocuments.belongsTo(db.drivingLicence);
// db.truck.hasOne(db.truckDocuments);
// db.truckDocuments.belongsTo(db.truck);
// db.permit.hasOne(db.truckDocuments);
// db.truckDocuments.belongsTo(db.permit);
// db.pucc.hasOne(db.truckDocuments);
// db.truckDocuments.belongsTo(db.pucc);
// db.truckInsurance.hasOne(db.truckDocuments);
// db.truckDocuments.belongsTo(db.truckInsurance);
// db.truckRegistration.hasOne(db.truckDocuments);
// db.truckDocuments.belongsTo(db.truckRegistration);
// db.user.hasOne(db.userTruck);
// db.userTruck.belongsTo(db.user);
// db.truck.hasOne(db.userTruck);
// db.userTruck.belongsTo(db.truck);
// db.module.hasMany(db.module, { foreignKey: 'parent_module_id', as: 'sub_modules' });
// db.video.hasMany(db.videoLangAudio);
// db.videoLangAudio.belongsTo(db.video);
// db.language.hasMany(db.videoLangAudio);
// db.videoLangAudio.belongsTo(db.language);
// db.audio.hasOne(db.videoLangAudio);
// db.videoLangAudio.belongsTo(db.audio);
// db.module.hasMany(db.video);
// db.video.belongsTo(db.module);
// db.question.hasOne(db.resolver);
// db.resolver.belongsTo(db.question);
// db.options.hasOne(db.resolver);
// db.resolver.belongsTo(db.options);
// db.resolver.hasMany(db.translator);
// db.translator.belongsTo(db.resolver);
// db.language.hasMany(db.translator);
// db.translator.belongsTo(db.language);
// db.question.hasMany(db.options);
// db.options.belongsTo(db.question);
// db.question.hasOne(db.moduleAnswer);
// db.moduleAnswer.belongsTo(db.question);
// db.validAnswers.hasMany(db.moduleAnswer);
// db.moduleAnswer.belongsTo(db.validAnswers);
// db.module.hasMany(db.question);
// db.question.belongsTo(db.module);
// db.user.hasMany(db.moduleResponse);
// db.moduleResponse.belongsTo(db.user);
// db.module.hasMany(db.moduleResponse);
// db.moduleResponse.belongsTo(db.module);
// db.journey.hasOne(db.moduleResponse);
// db.moduleResponse.belongsTo(db.journey);
// db.route.belongsToMany(db.module, { through: db.routeModules });
// db.module.belongsToMany(db.route, { through: db.routeModules });
// db.route.hasMany(db.journey);
// db.journey.belongsTo(db.route);
// db.language.hasMany(db.image);
// db.image.belongsTo(db.language);
// db.module.hasMany(db.image);
// db.image.belongsTo(db.module);
// db.language.hasMany(db.pdf);
// db.pdf.belongsTo(db.language);
// db.module.hasMany(db.pdf);
// db.pdf.belongsTo(db.module);
// db.route.belongsTo(db.location, { as: 'source', foreignKey: 'from' });
// db.route.belongsTo(db.location, { as: 'destination', foreignKey: 'to' });
// db.location.belongsToMany(db.module, { through: db.destinationModules });
// db.module.belongsToMany(db.location, { through: db.destinationModules });
// db.branch.hasMany(db.moduleResponse);
// db.moduleResponse.belongsTo(db.branch);
// db.location.hasOne(db.branch);
// db.branch.belongsTo(db.location);
// db.moduleResponse.belongsTo(db.user, { as: 'supervisor', foreignKey: 'supervisorId' });
// db.user.hasMany(db.userTruckLogs);
// db.userTruckLogs.belongsTo(db.user);
// db.truck.hasMany(db.userTruckLogs);
// db.userTruckLogs.belongsTo(db.truck);
// db.notifications.hasOne(db.resolver);
// db.resolver.belongsTo(db.notifications);
// db.language.hasMany(db.user);
// db.user.belongsTo(db.language);
// db.user.hasMany(db.loginLogs);
// db.loginLogs.belongsTo(db.user);
// db.branch.hasMany(db.loginLogs);
// db.loginLogs.belongsTo(db.branch);
// db.user.hasMany(db.destinationModulesHistory);
// db.destinationModulesHistory.belongsTo(db.user);
// db.location.hasMany(db.destinationModulesHistory);
// db.destinationModulesHistory.belongsTo(db.location);
// db.module.hasMany(db.destinationModulesHistory);
// db.destinationModulesHistory.belongsTo(db.module);
// db.journey.belongsToMany(db.notifications, { through: db.journeyNotifications });
// db.notifications.belongsToMany(db.journey, { through: db.journeyNotifications });
// db.journey.hasMany(db.journeyNotifications);
// db.journeyNotifications.belongsTo(db.journey);
// db.notifications.hasMany(db.journeyNotifications);
// db.journeyNotifications.belongsTo(db.notifications);
// db.user.hasMany(db.driverEntryLogs);
// db.driverEntryLogs.belongsTo(db.user);
// db.truck.hasMany(db.truckEntryLogs);
// db.truckEntryLogs.belongsTo(db.truck);
// db.truck.hasMany(db.truckQNA);
// db.truckQNA.belongsTo(db.truck);
// db.userTruckLogs.hasOne(db.truckEntryLogs);
// db.truckEntryLogs.belongsTo(db.userTruckLogs);
// db.branch.hasMany(db.truckEntryLogs, { foreignKey: 'branch_id', sourceKey: "branch_id" });
// db.truckEntryLogs.belongsTo(db.branch, { foreignKey: 'branch_id', targetKey: "branch_id" });
// db.branch.hasMany(db.user);
// db.user.belongsTo(db.branch);
// db.branch.hasMany(db.userTruckLogs);
// db.userTruckLogs.belongsTo(db.branch);
// db.language.hasMany(db.journeyNotifications);
// db.journeyNotifications.belongsTo(db.language);
// db.otp.hasOne(db.loginLogs);
// db.loginLogs.belongsTo(db.otp);
// db.journey.hasMany(db.insurance);
// db.insurance.belongsTo(db.journey);
// db.user.hasOne(db.insurance);
// db.insurance.belongsTo(db.user);
// db.branch.hasMany(db.insurance, { foreignKey: 'branch_id', sourceKey: "branch_id" });
// db.insurance.belongsTo(db.branch, { foreignKey: 'branch_id', targetKey: "branch_id" });
// db.transporter.hasMany(db.driverEntryLogs);
// db.driverEntryLogs.belongsTo(db.transporter);
// db.driverEntryLogs.hasMany(db.moduleResponse);
// db.moduleResponse.belongsTo(db.driverEntryLogs);

module.exports = db;