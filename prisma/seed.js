const bcrypt = require('bcryptjs')
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

const password = bcrypt.hashSync('123456')
const userData = [
  { username : 'andy', password,fname :'big',lname:'za' ,email: 'andy@ggg.mail',address:'50/88',phone:'0800000000' },
 
]

const run = async () => {
 try{ await prisma.user.createMany({
    data : userData
  });
  console.log('Seed successful!');
} catch (error) {
  console.error('Seed failed with error:', error);
} finally {
  await prisma.$disconnect(); 
}
};
run()
