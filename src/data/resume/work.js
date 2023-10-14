/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Cogoport Pvt. Ltd.',
    position: 'Software Development Engineer 1',
    url: 'https://www.cogoport.com/',
    startDate: 'July 2022',
    endDate: 'Oct 2023',
    highlights: [
      'Collaborated with cross-functional teams to ensure compliance with financial regulations and data security standards, contributing to the successful completion of Account Payables, Account Receivables and Settlement.',
      'Created custom data visualizations, including line charts, bar graphs, and pie charts to represent key financial metrics and trends.',
      'Developed and maintained financial applications, which resulted in improving data accuracy and reducing processing time.',
      'Participated in code reviews, providing feedback to enhance code quality and maintain consistency.',
    ],
  },
  {
    name: 'Cogoport Pvt. Ltd.',
    position: 'Software Development Engineer 1',
    url: 'https://www.cogoport.com/',
    startDate: 'Jan 2022',
    endDate: 'June 2022',
    highlights: [
      'Collaborated with a team of developers and designers to contribute to the development of COE Finance, Manual Invoice etc.',
      'Used React, CSS, and Javascript to implement frontend projects.',
      'Worked alongside senior developers to troubleshoot and debug software issues, contributing to timely resolutions and improving web pages.',
    ],
  },
];

export default work;
