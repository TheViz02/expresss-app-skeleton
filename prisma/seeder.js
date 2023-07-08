import prisma from "./index.js";

let dataForData = [
  {
    name: "Yash Maadhu",
    userId: 1,
    email: "yash@mail.com",
    phoneNumber: "+91 9736642442",
  },
  {
    name: "Test1",
    userId: 1,
    email: "test1@mail.com",
    phoneNumber: "+91 9736642442",
  },
  {
    name: "Test 2",
    userId: 1,
    email: "test2@mail.com",
    phoneNumber: "+91 9736642442",
  },
  {
    name: "Test 3",
    userId: 1,
    email: "test3@mail.com",
    phoneNumber: "+91 9736643443",
  },
  {
    name: "Test 4",
    userId: 1,
    email: "test4@mail.com",
    phoneNumber: "+91 9736644444",
  },
  {
    name: "Test 5",
    userId: 1,
    email: "test5@mail.com",
    phoneNumber: "+91 9736645445",
  },
];

async function main() {
  await prisma.$connect();
  dataForData.forEach(async (data, index) => {
    await prisma.data.create({
      data: data,
    });
    console.log(index);
  });
  return true;
}

main()
  .then(async (res) => {
    if (res) {
      await prisma.$disconnect();
      console.log("Data Added Successfully");
    }
  })
  .catch((error) => {
    throw new Error(error);
  });
