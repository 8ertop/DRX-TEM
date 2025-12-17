module.exports.config = {
    name: "test",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Bot",
    description: "أمر اختبار للتأكد من عمل البوت",
    commandCategory: "system",
    usages: "[test]",
    cooldowns: 5
};

module.exports.run = async function({ api, event }) {
    return api.sendMessage("✅ البوت يعمل بشكل صحيح!", event.threadID, event.messageID);
};
