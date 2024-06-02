async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy();

  console.log("Vault contract deployed to:", vault.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });