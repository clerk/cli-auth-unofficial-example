oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![GitHub license](https://img.shields.io/github/license/oclif/hello-world)](https://github.com/oclif/hello-world/blob/main/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g mycli
$ mycli COMMAND
running command...
$ mycli (--version)
mycli/0.0.0 darwin-arm64 node-v18.16.0
$ mycli --help [COMMAND]
USAGE
  $ mycli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`mycli hello PERSON`](#mycli-hello-person)
* [`mycli hello world`](#mycli-hello-world)
* [`mycli help [COMMANDS]`](#mycli-help-commands)
* [`mycli plugins`](#mycli-plugins)
* [`mycli plugins:install PLUGIN...`](#mycli-pluginsinstall-plugin)
* [`mycli plugins:inspect PLUGIN...`](#mycli-pluginsinspect-plugin)
* [`mycli plugins:install PLUGIN...`](#mycli-pluginsinstall-plugin-1)
* [`mycli plugins:link PLUGIN`](#mycli-pluginslink-plugin)
* [`mycli plugins:uninstall PLUGIN...`](#mycli-pluginsuninstall-plugin)
* [`mycli plugins:uninstall PLUGIN...`](#mycli-pluginsuninstall-plugin-1)
* [`mycli plugins:uninstall PLUGIN...`](#mycli-pluginsuninstall-plugin-2)
* [`mycli plugins update`](#mycli-plugins-update)

## `mycli hello PERSON`

Say hello

```
USAGE
  $ mycli hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/nikosdouvlis/mycli/blob/v0.0.0/dist/commands/hello/index.ts)_

## `mycli hello world`

Say hello world

```
USAGE
  $ mycli hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ mycli hello world
  hello world! (./src/commands/hello/world.ts)
```

## `mycli help [COMMANDS]`

Display help for mycli.

```
USAGE
  $ mycli help [COMMANDS] [-n]

ARGUMENTS
  COMMANDS  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for mycli.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.2.9/src/commands/help.ts)_

## `mycli plugins`

List installed plugins.

```
USAGE
  $ mycli plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ mycli plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.4.7/src/commands/plugins/index.ts)_

## `mycli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mycli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mycli plugins add

EXAMPLES
  $ mycli plugins:install myplugin 

  $ mycli plugins:install https://github.com/someuser/someplugin

  $ mycli plugins:install someuser/someplugin
```

## `mycli plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ mycli plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ mycli plugins:inspect myplugin
```

## `mycli plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ mycli plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ mycli plugins add

EXAMPLES
  $ mycli plugins:install myplugin 

  $ mycli plugins:install https://github.com/someuser/someplugin

  $ mycli plugins:install someuser/someplugin
```

## `mycli plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ mycli plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ mycli plugins:link myplugin
```

## `mycli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mycli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mycli plugins unlink
  $ mycli plugins remove
```

## `mycli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mycli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mycli plugins unlink
  $ mycli plugins remove
```

## `mycli plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ mycli plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ mycli plugins unlink
  $ mycli plugins remove
```

## `mycli plugins update`

Update installed plugins.

```
USAGE
  $ mycli plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
