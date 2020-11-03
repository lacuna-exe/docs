/*
GitHub folder:
- countr/ - repository of countr/countr
- countr-docs/ - repository of countr/docs (this repository)

Open a command prompt in the source code folder (countr/countr).
Run `node ../countr-docs/autodoc.js`
*/

const
  fs = require("fs"),
  fixMarkdown = str => str
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;"),
  permissionRoles = ["All", "Mods", "Admins", "Server Owner"],
  permissionRoleDescriptions = [
    "Everyone have access to these commands.",
    "Everyone with the Manage Messages-permission have access to these commands.",
    "Everyone with the Manage Server-permission have access to these commands.",
    "Only the server owner has access to these commands."
  ];

fs.readdir("./src/commands/", (err, files) => {
  if (err) return console.error(err);

  const content = [{}, {}, {}, {}], commands = [], commandDoc = [];

  for (const file of files) if (file.endsWith(".js")) {
    const
      commandName = file.replace(".js", ""),
      commandFile = require(`../countr/src/commands/${file}`);
    
    if (commandFile.permissionRequired < 4) {
      console.log(commandFile.permissionRequired, commandName, content);
      content[commandFile.permissionRequired][commandName] = commandFile.description;
      commands.push([
        `## c!${commandName}`,
        fixMarkdown(commandFile.description),
        Object.keys(commandFile.usage).length ? `**Usage:** \`c!${commandName}${Object.keys(commandFile.usage).map(a => ` ${a}`).join("")}\`${Object.keys(commandFile.usage).map(a => `\n- \`${a}\`: ${fixMarkdown(commandFile.usage[a])}`).join("")}` : null,
        Object.keys(commandFile.examples).length ? `**Examples:**\n${Object.keys(commandFile.examples).map(ex => `- \`c!${commandName}${ex ? ` ${ex}` : ""}\`: ${fixMarkdown(commandFile.examples[ex])}`).join("\n")}` : null,
        `**Permission Level:** ${commandFile.permissionRequired}, ${permissionRoles[commandFile.permissionRequired]}`,
        commandFile.aliases.length ? `**Aliases:** ${commandFile.aliases.map(a => `\`${a}\``).join(", ")}` : null
      ]
        .filter(s => s && !s.endsWith("N/A"))
        .join("\n\n")
      );
    }
  }

  for (const permission in content) commandDoc.push(
    `# Commands for ${["Everyone", "Mods", "Admins", "Server Owners"][permission]}`,
    permissionRoleDescriptions[permission],
    "",
    ...Object.keys(content[permission]).map(command => `- [c!${command}](#c${command}): ${content[permission][command]}`),
    ""
  );

  commandDoc.push(...commands.join("\n\n").split("\n"));

  fs.writeFileSync("../countr-docs/docs/commands.md", commandDoc.join("\n"), "utf8");

  process.exit(0);
});