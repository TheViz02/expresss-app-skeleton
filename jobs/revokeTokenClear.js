import prisma from '../prisma/index.js';

async function getTodayDate() {
    // Date object
    const date = new Date();

    let currentDay = String(date.getDate()).padStart(2, '0')
        , currentMonth = String(date.getMonth() + 1).padStart(2, "0")
        , currentYear = date.getFullYear();

    let currentDate = `${currentYear}-${currentMonth}-${currentDay}`;

    console.log("The current date is " + currentDate);

    return currentDate;

}

async function main() {
    try {
        await prisma.RevokedToken.deleteMany({
            where: {
                createdAt: { gte: new Date(await getTodayDate()) }
            }
        });

        console.log("Revoked token deleted successfully");

        return true;
    } catch (error) {
        throw error;
    }
}

main().then(() => true).finally(async () => {
    await prisma.$disconnect();
});
