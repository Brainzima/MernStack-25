import axios from 'axios';
import React, { useEffect, useState } from 'react';

const App = () => {
//   const booksData = {
//   "statusCode": 200,
//   "data": {
//     "page": 1,
//     "limit": 10,
//     "totalPages": 21,
//     "previousPage": false,
//     "nextPage": true,
//     "totalItems": 210,
//     "currentPageItems": 10,
//     "data": [
//       {
//         "kind": "books#volume",
//         "id": 1,
//         "etag": "KfkbeLGcmEA",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/KA9QDwAAQBAJ",
//         "volumeInfo": {
//           "title": "Practices of an Agile Developer",
//           "subtitle": "Working in the Real World",
//           "authors": [
//             "Venkat Subramaniam",
//             "Andy Hunt"
//           ],
//           "publisher": "Pragmatic Bookshelf",
//           "publishedDate": "2006-04-04",
//           "description": "These are the proven, effective agile practices that will make you a better developer. You'll learn pragmatic ways of approaching the development process and your personal coding techniques. You'll learn about your own attitudes, issues with working on a team, and how to best manage your learning, all in an iterative, incremental, agile style. You'll see how to apply each practice, and what benefits you can expect. Bottom line: This book will make you a better developer.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9781680504149"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "1680504142"
//             }
//           ],
//           "readingModes": {
//             "text": true,
//             "image": true
//           },
//           "pageCount": 237,
//           "printType": "BOOK",
//           "categories": [
//             "Computers"
//           ],
//           "averageRating": 3,
//           "ratingsCount": 4,
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": true,
//           "contentVersion": "1.2.3.0.preview.3",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=KA9QDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=KA9QDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=KA9QDwAAQBAJ&printsec=frontcover&dq=developer&hl=&cd=1&source=gbs_api",
//           "infoLink": "https://play.google.com/store/books/details?id=KA9QDwAAQBAJ&source=gbs_api",
//           "canonicalVolumeLink": "https://play.google.com/store/books/details?id=KA9QDwAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "FOR_SALE",
//           "isEbook": true,
//           "listPrice": {
//             "amount": 1923.4,
//             "currencyCode": "INR"
//           },
//           "retailPrice": {
//             "amount": 1923.4,
//             "currencyCode": "INR"
//           },
//           "buyLink": "https://play.google.com/store/books/details?id=KA9QDwAAQBAJ&rdid=book-KA9QDwAAQBAJ&rdot=1&source=gbs_api",
//           "offers": [
//             {
//               "finskyOfferType": 1,
//               "listPrice": {
//                 "amountInMicros": 1923400000,
//                 "currencyCode": "INR"
//               },
//               "retailPrice": {
//                 "amountInMicros": 1923400000,
//                 "currencyCode": "INR"
//               }
//             }
//           ]
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": true
//           },
//           "pdf": {
//             "isAvailable": true
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=KA9QDwAAQBAJ&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "These are the proven, effective agile practices that will make you a better developer."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 2,
//         "etag": "aT6gRM8dLto",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/bmDFjgEACAAJ",
//         "volumeInfo": {
//           "title": "Developer Testing",
//           "subtitle": "Building Quality Into Software",
//           "authors": [
//             "Alexander Tarlinder"
//           ],
//           "publisher": "Addison-Wesley Signature Series (Cohn)",
//           "publishedDate": "2016",
//           "description": "To build high-quality software, you need to write testable code. That's harder than it seems: it requires insights drawn from arenas ranging from software craftsmanship to unit testing, refactoring to test-driven development. Most programming books either discuss testing only briefly, or drill down on just one or two techniques, with little guidance on how to systematically verify code. Most testing books, on the other hand, focus on a specific testing process, without showing how to write software that can be easily and systematically tested. In Developer Testing, leading software engineering consultant Alexander Tarnowski strikes an optimal balance, integrating insights from multiple disciplines to help frustrated practitioners get better results. Drawing on his extensive experience as a mentor and trainer, he offers insights that help you accelerate through the typical software assurance learning curve, so you can progress far more rapidly. Tarnowski organizes his insights into \"chunks\" to help you quickly absorb key concepts, and focuses on technology-agnostic approaches you can keep using with any new language, platform, or toolset. The first guide to cover testing mindset, techniques, and applications from the developer's perspective, Developer Testing will help developers get what they really want: better code. -- Provided by publisher.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_10",
//               "identifier": "0134291069"
//             },
//             {
//               "type": "ISBN_13",
//               "identifier": "9780134291062"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": false
//           },
//           "pageCount": 0,
//           "printType": "BOOK",
//           "categories": [
//             "Computer programs"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "preview-1.0.0",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=bmDFjgEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=bmDFjgEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=bmDFjgEACAAJ&dq=developer&hl=&cd=2&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=bmDFjgEACAAJ&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/Developer_Testing.html?hl=&id=bmDFjgEACAAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "NO_PAGES",
//           "embeddable": false,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=bmDFjgEACAAJ&hl=&source=gbs_api",
//           "accessViewStatus": "NONE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "The first guide to cover testing mindset, techniques, and applications from the developer&#39;s perspective, Developer Testing will help developers get what they really want: better code. -- Provided by publisher."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 3,
//         "etag": "6NOaUBND99o",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/A31lDQAAQBAJ",
//         "volumeInfo": {
//           "title": "Java Programming for Android Developers For Dummies",
//           "authors": [
//             "Barry Burd"
//           ],
//           "publisher": "John Wiley & Sons",
//           "publishedDate": "2016-11-07",
//           "description": "Develop the next killer Android App using Java programming! Android is everywhere! It runs more than half the smartphones in the U.S.—and Java makes it go. If you want to cash in on its popularity by learning to build Android apps with Java, all the easy-to-follow guidance you need to get started is at your fingertips. Inside, you'll learn the basics of Java and grasp how it works with Android; then, you'll go on to create your first real, working application. How cool is that? The demand for Android apps isn't showing any signs of slowing, but if you're a mobile developer who wants to get in on the action, it's vital that you get the necessary Java background to be a success. With the help of Java Programming for Android Developers For Dummies, you'll quickly and painlessly discover the ins and outs of using Java to create groundbreaking Android apps—no prior knowledge or experience required! Get the know-how to create an Android program from the ground up Make sense of basic Java development concepts and techniques Develop the skills to handle programming challenges Find out how to debug your app Don't sit back and watch other developers release apps that bring in the bucks! Everything you need to create that next killer Android app is just a page away!",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9781119301080"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "1119301084"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": true
//           },
//           "pageCount": 456,
//           "printType": "BOOK",
//           "categories": [
//             "Computers"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "0.3.2.0.preview.1",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=A31lDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=A31lDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=A31lDQAAQBAJ&printsec=frontcover&dq=developer&hl=&cd=3&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=A31lDQAAQBAJ&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/Java_Programming_for_Android_Developers.html?hl=&id=A31lDQAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.co.in/books/download/Java_Programming_for_Android_Developers-sample-pdf.acsm?id=A31lDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=A31lDQAAQBAJ&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "With the help of Java Programming for Android Developers For Dummies, you&#39;ll quickly and painlessly discover the ins and outs of using Java to create groundbreaking Android apps—no prior knowledge or experience required!"
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 4,
//         "etag": "M+aHgueRKtY",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/lT3LDwAAQBAJ",
//         "volumeInfo": {
//           "title": "Ask Your Developer",
//           "subtitle": "How to Harness the Power of Software Developers and Win in the 21st Century",
//           "authors": [
//             "Jeff Lawson"
//           ],
//           "publisher": "HarperCollins",
//           "publishedDate": "2021-01-12",
//           "description": "Jeff Lawson, developer turned CEO of Twilio (one of Bloomberg Businessweek's Top 50 Companies to Watch in 2021), creates a new playbook for unleashing the full potential of software developers in any organization, showing how to help management utilize this coveted and valuable workforce to enable growth, solve a wide range of business problems, and drive digital transformation. From banking and retail to insurance and finance, every industry is turning digital, and every company needs the best software to win the hearts and minds of customers. The landscape has shifted from the classic build vs. buy question, to one of build vs. die. Companies have to get this right to survive. But how do they make this transition? Software developers are sought after, highly paid, and desperately needed to compete in the modern, digital economy. Yet most companies treat them like digital factory workers without really understanding how to unleash their full potential. Lawson argues that developers are the creative workforce who can solve major business problems and create hit products for customers—not just grind through rote tasks. From Google and Amazon, to one-person online software companies—companies that bring software developers in as partners are winning. Lawson shows how leaders who build industry changing software products consistently do three things well. First, they understand why software developers matter more than ever. Second, they understand developers and know how to motivate them. And third, they invest in their developers' success. As a software developer and public company CEO, Lawson uses his unique position to bridge the language and tools executives use with the unique culture of high performing, creative software developers. Ask Your Developer is a toolkit to help business leaders, product managers, technical leaders, software developers, and executives achieve their common goal—building great digital products and experiences. How to compete in the digital economy? In short: Ask Your Developer.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9780063018303"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "0063018306"
//             }
//           ],
//           "readingModes": {
//             "text": true,
//             "image": false
//           },
//           "pageCount": 304,
//           "printType": "BOOK",
//           "categories": [
//             "Business & Economics"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": true,
//           "contentVersion": "1.1.1.0.preview.2",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=lT3LDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=lT3LDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=lT3LDwAAQBAJ&printsec=frontcover&dq=developer&hl=&cd=4&source=gbs_api",
//           "infoLink": "https://play.google.com/store/books/details?id=lT3LDwAAQBAJ&source=gbs_api",
//           "canonicalVolumeLink": "https://play.google.com/store/books/details?id=lT3LDwAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "FOR_SALE",
//           "isEbook": true,
//           "listPrice": {
//             "amount": 1643.55,
//             "currencyCode": "INR"
//           },
//           "retailPrice": {
//             "amount": 1643.55,
//             "currencyCode": "INR"
//           },
//           "buyLink": "https://play.google.com/store/books/details?id=lT3LDwAAQBAJ&rdid=book-lT3LDwAAQBAJ&rdot=1&source=gbs_api",
//           "offers": [
//             {
//               "finskyOfferType": 1,
//               "listPrice": {
//                 "amountInMicros": 1643550000,
//                 "currencyCode": "INR"
//               },
//               "retailPrice": {
//                 "amountInMicros": 1643550000,
//                 "currencyCode": "INR"
//               }
//             }
//           ]
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.co.in/books/download/Ask_Your_Developer-sample-epub.acsm?id=lT3LDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=lT3LDwAAQBAJ&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "How to compete in the digital economy? In short: Ask Your Developer."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 5,
//         "etag": "b7yZqHfYIlM",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/lAOqDwAAQBAJ",
//         "volumeInfo": {
//           "title": "AWS Certified Developer Official Study Guide",
//           "subtitle": "Associate (DVA-C01) Exam",
//           "authors": [
//             "Nick Alteen",
//             "Jennifer Fisher",
//             "Casey Gerena",
//             "Wes Gruver",
//             "Asim Jalis",
//             "Heiwad Osman",
//             "Marife Pagan",
//             "Santosh Patlolla",
//             "Michael Roth"
//           ],
//           "publisher": "John Wiley & Sons",
//           "publishedDate": "2019-09-24",
//           "description": "Foreword by Werner Vogels, Vice President and Corporate Technology Officer, Amazon The AWS exam has been updated. Your study guide should be, too. The AWS Certified Developer Official Study Guide–Associate Exam is your ultimate preparation resource for the latest exam! Covering all exam objectives, this invaluable resource puts a team of AWS experts at your side with expert guidance, clear explanations, and the wisdom of experience with AWS best practices. You’ll master core services and basic architecture, and equip yourself to develop, deploy, and debug cloud-based applications using AWS. The AWS Developer certification is earned by those who demonstrate the technical knowledge and skill associated with best practices for building secure, reliable cloud-based applications using AWS technology. This book is your official exam prep companion, providing everything you need to know to pass with flying colors. Study the AWS Certified Developer Exam objectives Gain expert insight on core AWS services and best practices Test your understanding of key concepts with challenging chapter questions Access online study tools including electronic flashcards, a searchable glossary, practice exams, and more Cloud computing offers businesses the opportunity to replace up-front capital infrastructure expenses with low, variable costs that scale as they grow. This customized responsiveness has negated the need for far-future infrastructure planning, putting thousands of servers at their disposal as needed—and businesses have responded, propelling AWS to the number-one spot among cloud service providers. Now these businesses need qualified AWS developers, and the AWS certification validates the exact skills and knowledge they’re looking for. When you’re ready to get serious about your cloud credentials, the AWS Certified Developer Official Study Guide–Associate Exam is the resource you need to pass the exam with flying colors. NOTE: As of October 7, 2019, the accompanying code for hands-on exercises in the book is available for downloading from the secure Resources area in the online test bank. You'll find code for Chapters 1, 2, 11, and 12.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9781119508199"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "1119508193"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": true
//           },
//           "pageCount": 992,
//           "printType": "BOOK",
//           "categories": [
//             "Computers"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "0.3.1.0.preview.1",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=lAOqDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=lAOqDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=lAOqDwAAQBAJ&printsec=frontcover&dq=developer&hl=&cd=5&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=lAOqDwAAQBAJ&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/AWS_Certified_Developer_Official_Study_G.html?hl=&id=lAOqDwAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.co.in/books/download/AWS_Certified_Developer_Official_Study_G-sample-pdf.acsm?id=lAOqDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=lAOqDwAAQBAJ&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "This Sybex Study Guide covers the exam topics, helping you gain an understanding of core AWS development concepts. This official study guide is what you need to achieve your goals on exam day and throughout your career."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 6,
//         "etag": "N/lZcdU/jzU",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/UFGaCwAAQBAJ",
//         "volumeInfo": {
//           "title": "Android Development Patterns",
//           "subtitle": "Best Practices for Professional Developers",
//           "authors": [
//             "Phil Dutson"
//           ],
//           "publisher": "Addison-Wesley Professional",
//           "publishedDate": "2016-02-18",
//           "description": "“A must read for all developers that want to begin serious Android development.” —Justin Anderson, Freelance Android Developer “From start to finish, this book contains a variety of great tips and insight into the most important attributes of Android design. This book will definitely be required reading for any of our future Android engineers.” —Cameron Banga, Cofounder, 9magnets, LLC There’s a downside to Android’s amazing openness and versatility: it’s easy for developers to write code that’s inefficient, unreliable, insecure, or hard to maintain. In Android Development Patterns , enterprise Android developer Phil Dutson helps you leverage Android 5.0+’s amazing power without falling victim to those pitfalls. Dutson presents today’s most comprehensive set of patterns and procedures for building optimized, robust apps with Android 5.0+. First, Dutson guides you through establishing a highly efficient development environment and workflow, and testing your app to ensure that your code works just as you expect. Then, he walks through the modern best practices for structuring apps, using widgets and components, and working with views. You learn how to build apps that are easy to manage and update, deliver accurate and up-to-date information without wasting precious battery power, and take advantage of new hardware, such as Android Wear and Android TV. Dutson concludes by presenting powerful strategies for optimizing your apps and packaging them for distribution. Coverage includes Using testing to build more trustworthy, dependable, maintainable apps Understanding subtle but critical differences between Android and traditional Java programming Building consistent, modern user interfaces with views and layouts Leveraging the proven MVC pattern to cleanly organize logic Creating rich visual experiences with 3D graphics, animation, and media Simplifying capture and use of location data with the new Locations API Integrating optional hardware, such as Bluetooth, NFC, or USB Building better apps with Google Play Services Creating Android Wear notifications and apps Tuning and improving apps with Google Analytics Designing Android TV apps for the “ten foot view” informit.com/aw https://github.com/dutsonpa/adp-files",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9780133924046"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "0133924041"
//             }
//           ],
//           "readingModes": {
//             "text": true,
//             "image": true
//           },
//           "pageCount": 320,
//           "printType": "BOOK",
//           "categories": [
//             "Computers"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": true,
//           "contentVersion": "1.1.1.0.preview.3",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=UFGaCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=UFGaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=UFGaCwAAQBAJ&printsec=frontcover&dq=developer&hl=&cd=6&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=UFGaCwAAQBAJ&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/Android_Development_Patterns.html?hl=&id=UFGaCwAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
//           "epub": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.co.in/books/download/Android_Development_Patterns-sample-epub.acsm?id=UFGaCwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "pdf": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.co.in/books/download/Android_Development_Patterns-sample-pdf.acsm?id=UFGaCwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=UFGaCwAAQBAJ&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "“A must read for all developers that want to begin serious Android development.” —Justin Anderson, Freelance Android Developer “From start to finish, this book contains a variety of great tips and insight into the most important ..."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 7,
//         "etag": "NkycvzZAzfU",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/oxg8_i9dVakC",
//         "volumeInfo": {
//           "title": "HTTP Developer's Handbook",
//           "authors": [
//             "Chris Shiflett"
//           ],
//           "publisher": "Sams Publishing",
//           "publishedDate": "2003",
//           "description": "HTTP is the protocol that powers the Web. As Web applications become more sophisticated, and as emerging technologies continue to rely heavily on HTTP, understanding this protocol is becoming more and more essential for professional Web developers. By learning HTTP protocol, Web developers gain a deeper understanding of the Web's architecture and can create even better Web applications that are more reliable, faster, and more secure. The HTTP Developer's Handbook is written specifically for Web developers. It begins by introducing the protocol and explaining it in a straightforward manner. It then illustrates how to leverage this information to improve applications. Extensive information and examples are given covering a wide variety of issues, such as state and session management, caching, SSL, software architecture, and application security.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_10",
//               "identifier": "0672324547"
//             },
//             {
//               "type": "ISBN_13",
//               "identifier": "9780672324543"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": true
//           },
//           "pageCount": 306,
//           "printType": "BOOK",
//           "categories": [
//             "Bilgisayar Ağ Protokolü"
//           ],
//           "averageRating": 3.5,
//           "ratingsCount": 6,
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "5.6.5.0.preview.1",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=oxg8_i9dVakC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=oxg8_i9dVakC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=oxg8_i9dVakC&printsec=frontcover&dq=developer&hl=&cd=7&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=oxg8_i9dVakC&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/HTTP_Developer_s_Handbook.html?hl=&id=oxg8_i9dVakC"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=oxg8_i9dVakC&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "The HTTP Developer&#39;s Handbook is written specifically for Web developers. It begins by introducing the protocol and explaining it in a straightforward manner. It then illustrates how to leverage this information to improve applications."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 8,
//         "etag": "3bPp8sgWsAk",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/ld6E19QIMo4C",
//         "volumeInfo": {
//           "title": "Mastering ENVY/Developer",
//           "authors": [
//             "Joseph Pelrine",
//             "Alan Knight",
//             "Adrian Cho"
//           ],
//           "publisher": "Cambridge University Press",
//           "publishedDate": "2001-03-19",
//           "description": "This book is an in-depth exploration of ENVY/Developer, IBM's team programming environment for Smalltalk and Java. Written by well-known experts in the area, it presents both introductory and advanced topics with detailed examples. The first two parts of the book introduce the basics that a developer or development manager must know in order to use ENVY in a project setting, including the development process and the organization of applications. The third part covers advanced programming and customization, including detailed information on administering, troubleshooting, and extending the tools. This book covers VisualAge for Smalltalk, VisualWorks, and VisualAge Generator in detail. In addition, the concepts and management presented within the book apply to VisualAge for Java. Code examples, tools, and add-ons, are available on the supporting Web site.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_10",
//               "identifier": "0521666503"
//             },
//             {
//               "type": "ISBN_13",
//               "identifier": "9780521666503"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": true
//           },
//           "pageCount": 382,
//           "printType": "BOOK",
//           "categories": [
//             "Computers"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "3.3.5.0.preview.1",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=ld6E19QIMo4C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=ld6E19QIMo4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=ld6E19QIMo4C&printsec=frontcover&dq=developer&hl=&cd=8&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=ld6E19QIMo4C&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/Mastering_ENVY_Developer.html?hl=&id=ld6E19QIMo4C"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.co.in/books/download/Mastering_ENVY_Developer-sample-pdf.acsm?id=ld6E19QIMo4C&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=ld6E19QIMo4C&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "This book covers VisualAge for Smalltalk, VisualWorks, and VisualAge Generator in detail. In addition, the concepts and management presented within the book apply to VisualAge for Java."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 9,
//         "etag": "48wn8Io+xX0",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/dfJqmAEACAAJ",
//         "volumeInfo": {
//           "title": "Coder to Developer",
//           "subtitle": "Tools and Strategies for Delivering Your Software",
//           "authors": [
//             "Mike Gunderloy"
//           ],
//           "publisher": "Sybex",
//           "publishedDate": "2004-05-07",
//           "description": "\"Two thumbs up\" —Gregory V. Wilson, Dr. Dobbs Journal (October 2004) No one can disparage the ability to write good code. At its highest levels, it is an art. But no one can confuse writing good code with developing good software. The difference—in terms of challenges, skills, and compensation—is immense. Coder to Developer helps you excel at the many non-coding tasks entailed, from start to finish, in just about any successful development project. What's more, it equips you with the mindset and self-assurance required to pull it all together, so that you see every piece of your work as part of a coherent process. Inside, you'll find plenty of technical guidance on such topics as: Choosing and using a source code control system Code generation tools--when and why Preventing bugs with unit testing Tracking, fixing, and learning from bugs Application activity logging Streamlining and systematizing the build process Traditional installations and alternative approaches To pull all of this together, the author has provided the source code for Download Tracker, a tool for organizing your collection of downloaded code, that's used for examples throughout this book. The code is provided in various states of completion, reflecting every stage of development, so that you can dig deep into the actual process of building software. But you'll also develop \"softer\" skills, in areas such as team management, open source collaboration, user and developer documentation, and intellectual property protection. If you want to become someone who can deliver not just good code but also a good product, this book is the place to start. If you must build successful software projects, it's essential reading.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_10",
//               "identifier": "078214327X"
//             },
//             {
//               "type": "ISBN_13",
//               "identifier": "9780782143270"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": false
//           },
//           "pageCount": 320,
//           "printType": "BOOK",
//           "categories": [
//             "Computers"
//           ],
//           "averageRating": 3,
//           "ratingsCount": 1,
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "preview-1.0.0",
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=dfJqmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=dfJqmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=dfJqmAEACAAJ&dq=developer&hl=&cd=9&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=dfJqmAEACAAJ&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/Coder_to_Developer.html?hl=&id=dfJqmAEACAAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "NO_PAGES",
//           "embeddable": false,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": false
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=dfJqmAEACAAJ&hl=&source=gbs_api",
//           "accessViewStatus": "NONE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "Inside, you&#39;ll find plenty of technical guidance on such topics as: Choosing and using a source code control system Code generation tools--when and why Preventing bugs with unit testing Tracking, fixing, and learning from bugs Application ..."
//         }
//       },
//       {
//         "kind": "books#volume",
//         "id": 10,
//         "etag": "sQCa8UyT7gM",
//         "selfLink": "https://www.googleapis.com/books/v1/volumes/zp5hDwAAQBAJ",
//         "volumeInfo": {
//           "title": "A Day at Work with a Software Developer",
//           "authors": [
//             "Devon McKinney"
//           ],
//           "publisher": "The Rosen Publishing Group, Inc",
//           "publishedDate": "2015-12-15",
//           "description": "This book is sure to grab the attention of readers who love coding and computers. Readers will enjoy learning about STEM through the lens of a career as a software developer. The book introduces readers to the creative minds who develop computer programs and applications. Readers will learn how software developers use STEM every day, and how someone can land a job in this exciting field. Engaging text is illustrated with bright images to allow readers to fully grasp the topic. Readers will love fun features, such as fact boxes and graphic organizers. This book is an excellent guide to computers, careers, and STEM concepts.",
//           "industryIdentifiers": [
//             {
//               "type": "ISBN_13",
//               "identifier": "9781508144168"
//             },
//             {
//               "type": "ISBN_10",
//               "identifier": "1508144168"
//             }
//           ],
//           "readingModes": {
//             "text": false,
//             "image": true
//           },
//           "pageCount": 26,
//           "printType": "BOOK",
//           "categories": [
//             "Juvenile Nonfiction"
//           ],
//           "maturityRating": "NOT_MATURE",
//           "allowAnonLogging": false,
//           "contentVersion": "preview-1.0.0",
//           "panelizationSummary": {
//             "containsEpubBubbles": false,
//             "containsImageBubbles": false
//           },
//           "imageLinks": {
//             "smallThumbnail": "http://books.google.com/books/content?id=zp5hDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
//             "thumbnail": "http://books.google.com/books/content?id=zp5hDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
//           },
//           "language": "en",
//           "previewLink": "http://books.google.co.in/books?id=zp5hDwAAQBAJ&printsec=frontcover&dq=developer&hl=&cd=10&source=gbs_api",
//           "infoLink": "http://books.google.co.in/books?id=zp5hDwAAQBAJ&dq=developer&hl=&source=gbs_api",
//           "canonicalVolumeLink": "https://books.google.com/books/about/A_Day_at_Work_with_a_Software_Developer.html?hl=&id=zp5hDwAAQBAJ"
//         },
//         "saleInfo": {
//           "country": "IN",
//           "saleability": "NOT_FOR_SALE",
//           "isEbook": false
//         },
//         "accessInfo": {
//           "country": "IN",
//           "viewability": "PARTIAL",
//           "embeddable": true,
//           "publicDomain": false,
//           "textToSpeechPermission": "ALLOWED",
//           "epub": {
//             "isAvailable": false
//           },
//           "pdf": {
//             "isAvailable": true,
//             "acsTokenLink": "http://books.google.co.in/books/download/A_Day_at_Work_with_a_Software_Developer-sample-pdf.acsm?id=zp5hDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api"
//           },
//           "webReaderLink": "http://play.google.com/books/reader?id=zp5hDwAAQBAJ&hl=&source=gbs_api",
//           "accessViewStatus": "SAMPLE",
//           "quoteSharingAllowed": false
//         },
//         "searchInfo": {
//           "textSnippet": "This book is sure to grab the attention of readers who love coding and computers."
//         }
//       }
//     ]
//   },
//   "message": "Books fetched successfully",
//   "success": true
// }
  const [booksData, setBooksData] = useState([])
  const fetchBooks = async()=>{
    const url = 'https://api.freeapi.app/api/v1/public/books'
    try {
      const response = await axios.get(url)
      // console.log(response)
      // const data = await response.json()
      console.log(response.data.data.data)
      setBooksData(response.data.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchBooks()
  },[])
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Book Collection
        </h1>
        
        {booksData.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">No books available.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {booksData.map((book, index) => {
              const volumeInfo = book.volumeInfo || {};
              const imageLinks = volumeInfo.imageLinks || {};
              const thumbnail = imageLinks.thumbnail || imageLinks.smallThumbnail || 'https://via.placeholder.com/200x300?text=No+Image';
              
              return (
                <div key={book.id || index} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={thumbnail} 
                      alt={volumeInfo.title || 'Book cover'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {volumeInfo.title}
                    </h3>
                    
                    {volumeInfo.subtitle && (
                      <p className="text-sm text-gray-600 mb-3 italic line-clamp-1">
                        {volumeInfo.subtitle}
                      </p>
                    )}
                    
                    <div className="space-y-2 mb-4">
                      {volumeInfo.authors && volumeInfo.authors.length > 0 && (
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Authors:</span>{' '}
                          {volumeInfo.authors.slice(0, 2).join(', ')}
                          {volumeInfo.authors.length > 2 && '...'}
                        </p>
                      )}
                      
                      {volumeInfo.publisher && (
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Publisher:</span> {volumeInfo.publisher}
                        </p>
                      )}
                      
                      {volumeInfo.pageCount && (
                        <p className="text-sm text-gray-500">
                          <span className="font-medium">Pages:</span> {volumeInfo.pageCount.toLocaleString()}
                        </p>
                      )}
                      
                      {volumeInfo.averageRating && (
                        <p className="text-sm text-yellow-600 font-medium">
                          ★ {volumeInfo.averageRating}/5 ({volumeInfo.ratingsCount || 0} ratings)
                        </p>
                      )}
                    </div>
                    
                    {volumeInfo.description && (
                      <p className="text-sm text-gray-600 line-clamp-3 mb-4 leading-relaxed">
                        {volumeInfo.description}
                      </p>
                    )}
                    
                    <div className="flex space-x-2">
                      {volumeInfo.previewLink && (
                        <a
                          href={volumeInfo.previewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-xl text-center text-sm font-medium hover:bg-blue-700 transition-colors"
                        >
                          Preview
                        </a>
                      )}
                      {volumeInfo.infoLink && (
                        <a
                          href={volumeInfo.infoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-xl text-center text-sm font-medium hover:bg-indigo-700 transition-colors"
                        >
                          Details
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        
        {booksData && (
          <div className="mt-12 text-center text-sm text-gray-500">
            Showing {booksData.length} of {booksData.totalItems || 0} books
            {booksData.currentPageItems && ` (Page ${booksData.page || 1})`}
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
