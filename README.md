<h1 align="center">
  <a href="https://github.com/near/boilerplate-template-rs">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/near/boilerplate-template-rs/main/docs/images/pagoda_logo_light.png">
      <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/near/boilerplate-template-rs/main/docs/images/pagoda_logo_dark.png">
      <img alt="" src="https://raw.githubusercontent.com/near/boilerplate-template-rs/main/docs/images/pagoda_logo_dark.png">
    </picture>
  </a>
</h1>
<div align="center">
  Rust Boilerplate Template
  <br />
  <br />
  <a href="https://github.com/near/boilerplate-template-rs/issues/new?assignees=&labels=bug&template=01_BUG_REPORT.md&title=bug%3A+">Report a Bug</a>
  ·
  <a href="https://github.com/near/boilerplate-template-rs/issues/new?assignees=&labels=enhancement&template=02_FEATURE_REQUEST.md&title=feat%3A+">Request a Feature</a>
  .
  <a href="https://github.com/near/boilerplate-template-rs/issues/new?assignees=&labels=question&template=04_SUPPORT_QUESTION.md&title=support%3A+">Ask a Question</a>
</div>

<div align="center">
<br />

[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/near/boilerplate-template-rs/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![code with love by near](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-near-ff1414.svg?style=flat-square)](https://github.com/near)

</div>

<details open="open">
<summary>Table of Contents</summary>

- [About](#about)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Overview](#overview)
  - [Contracts](#contracts)
  - [Frontend](#frontend)
  - [Backend.js](#backendjs)
- [Usage](#usage)
- [Deploy on Vercel](#deploy-on-vercel)
- [Roadmap](#roadmap)
- [Support](#support)
- [Project assistance](#project-assistance)
- [Contributing](#contributing)
- [Authors & contributors](#authors--contributors)
- [Security](#security)

</details>

---

# Loyalty Program with Fungible Tokens


## About

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) and [`tailwindcss`](https://tailwindcss.com/docs/guides/nextjs) created for easy-to-start as a React + Rust skeleton template in the Pagoda Gallery. Smart-contract was initialized with [create-near-app]. Use this template and start to build your own gallery project!

### Built With

[`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), [`tailwindcss`](https://tailwindcss.com/docs/guides/nextjs), [`tailwindui`](https://tailwindui.com/), [`@headlessui/react`](https://headlessui.com/), [`@heroicons/react`](https://heroicons.com/), [create-near-app], [`amazing-github-template`](https://github.com/dec0dOS/amazing-github-template)

Getting Started
==================

### Prerequisites

Make sure you have a [current version of Node.js](https://nodejs.org/en/about/releases/) installed – we are targeting versions `18>`.

Read about other [prerequisites](https://docs.near.org/develop/prerequisites) in our docs.

### Installation


Install all dependencies:

    npm install


Build your contract:

    npm run build


Deploy your contract to TestNet with a temporary dev account:

    npm run deploy

**Important note**: only the factory contract is and should be deployed. Two other contracts (fungible-token contract and manager contract)
should only be deployed by the factory contract. This is done automatically when using `npm run deploy` command.

Overview
================

The loyalty program with the fungible token template provides a way for merchants to create
a fungible token program with just a few clicks.

The template consists of the following modules:

* 3 smart contracts: factory contract, fungible token contract and manager contract
* backend.js that serves as a web2 backend
* frontend that provides the UI for the customer and the merchant


## Contracts

This template features three smart contracts:

* factory contract - this is the contract that is deployed by the user. The contract uses a factory pattern
  to deploy fungible token contract and manager contract for each merchant that logs in and creates a loyalty program with the UI.
  See [factory-rust](https://github.com/near-examples/factory-rust) for a simple factory pattern.
* fungible token contract - this is a standard fungible token contract.
  Read more about the FTs [here](https://docs.near.org/develop/relevant-contracts/ft).
* manager contract - this contract manages the whole loaylty program flow

## Frontend

Frontend consists of two views:

* merchant view - this is the view where a merchant can create a loyalty program. The merchant needs to log in first.
* customer view - the view used by the customer to use the loyalty program and gain fungible tokens.
  This view is hidden until a merchant creates a loaylty program. The customer does not have to log in or create an account
  in order to use the loyalty program.

## Backend.js

Backend.js is a simple web2 backend simulated on the frontend in this template.


Usage
=====

Start your frontend:

    npm run build:web & npm start

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Test your contract:

    npm test

Exploring The Code
==================

1. The smart-contract code lives in the `/contracts` folder.
2. The frontend code lives in the `/frontend` folder. You can start editing the page by
   modifying `frontend/pages/index.tsx`. The page auto-updates as you edit the file.
   This is your entrypoint to learn how the frontend connects to the NEAR blockchain.
3. There is a backend code in the `backend.js` file in the `frontend` directory. This code
   simulates a web2 backend.
4. Test your contract: `npm test`, this will run the tests in `integration-tests` directory.

## Security

Loyalty Program with Fungible Tokens Template follows good practices of security, but 100% security cannot be assured.
Loyalty Program with Fungible Tokens Template is provided **"as is"** without any **warranty**. Use at your own risk.
