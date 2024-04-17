<h1 align="center">
    Custom package for Reusable React Admin Components
</h1>

<p align="center">
    <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/georgepadayatti/react-admin-component-library">
    <a href="/../../issues" title="Open Issues"><img src="https://img.shields.io/github/issues/georgepadayatti/react-admin-component-library?style=flat"></a>
    <a href="./LICENSE" title="License"><img src="https://img.shields.io/badge/License-Apache%202.0-yellowgreen?style=flat"></a>
</p>

<p align="center">
  <a href="#about">About</a> •
  <a href="#installation">Installation</a> •
  <a href="#usage">Usage</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#licensing">Licensing</a>
</p>

## About

This repository hosts custom package for reusable `react-admin` components.

## Installation

```
npm install 'georgepadayatti/react-admin-component-library'
```

## Usage

```js
import { IGTable } from 'react-admin-component-library';

export const SampleResource = () => (
    <IGTable sort={"ASC"}>
        <TextField source="id" label={"ID"} />
        <TextField source="title"/>
        <DateField source="published_at"/>
    </IGTable>
);
```

## Contributing

Feel free to improve the plugin and send us a pull request. If you find any problems, please create an issue in this repo.

## Licensing

Copyright (c) 2024-25 George Padayatti

Licensed under the Apache 2.0 License, Version 2.0 (the "License"); you may not use this file except in compliance with the License.

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the LICENSE for the specific language governing permissions and limitations under the License.
