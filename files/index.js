import fs from "fs/promises";  // Use fs.promises for promise-based API

try {
  // Step 1: Write to the file
  await fs.writeFile(
    `./journal.txt`,
    `Started learning fs module ${new Date().toLocaleString()}. \n`
  );


  // Step 2: Append content to the file
  await fs.appendFile(
    "./journal.txt",
    "Practiced writing and appending files \n"
  );

  // Step 3: Read the file
  const data = await fs.readFile("./journal.txt", "utf-8");
  console.log('File content after append:', data);


  // Step 4: Copy the file to backup
  await fs.copyFile('./journal.txt', './journal-backup.txt');
  console.log('File copied to backup');

  // Step 5: Delete both files
  const filesToDelete = ['./journal.txt', './journal-backup.txt'];
  for (let i = 0; i < filesToDelete.length; i++) {
    await fs.unlink(filesToDelete[i]);
    console.log(`${filesToDelete[i]} deleted`);
  }

} catch (err) {
  console.log('Error:', err);
}
