# Package the KO

A Knowledge Object can be packaged into a zip file for deployment and distribution.

## File Name for the ZIP File

The resulting ZIP file containing the KO is named based on the KO's ARK ID.

If packaging the whole KO, the filename will be

```
{naan}-{name}.zip
```

If packaging a specific implementation of the KO, the filename will be

```
{naan}-{name}-{implementation}.zip
```

## Using KGRID CLI

KGRID CLI provides a command to help the packaging process.

```
$ kgrid package [ARK]
```

Details for the command can be found in [KGRID-CLI Documentation](http://kgrid.org/kgrid-cli/#kgrid-package-ark)

## Next step

Now that the KO has been properly packaged, it can be deployed to a KGRID activator or deposited to a KGRID Library.
