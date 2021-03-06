const badgeMIT =
  '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

const badgeISC =
  '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

const badgeIBM =
  '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';

const badgeApache = 
  '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'



const renderBadges = (badge) => {
  if (badge === 'MIT') {
    return badgeMIT;

  } else if (badge === 'ISC') {
    return badgeISC

  } else if (badge === 'IBM') {
    return badgeIBM

  } else if (badge === 'Apache') {
    return badgeApache
  };
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderBadges(data.license)}

  ## Table of Contents

  * [Title] (#projectTitle)
  * [Description] (#projectDes)
  * [Installation] (#projectInstall)
  * [License] (#projectLicense)
  * [Collaboration] (#projectCollab)
  * [Contact] (#contact)
  
  ##Title
  ${data.projectTitle}

  ##Description 
  ${data.projectDes}

  ##Installation
  ${data.projectInstall}

  ##License
  ${data.projectLicense}

  ##Collaboration
  ${data.projectCollab}

  ##Contact
  <p> If you would like to contact me with any questions, reach out to me at </p>
  ${data.projectEmail}

  <p> Or chechk out my GitHub </p>
  ${data.projectGit}


`;
}

module.exports = generateMarkdown;