# Package the KO

A Knowledge Object can be packaged into a zip file for deployment and distribution. Details can be found in [KGrid Common Object Package specifications](https://kgrid.org/specs/packaging.html) 

## File Name for the ZIP File

The resulting ZIP file containing the KO is named based on the KO's ARK ID.

```
{naan}-{name}-{version}.zip
```


## Using KGrid CLI

KGrid CLI provides a command to help the packaging process.

To package the KO created in the previous section, run

```
 kgrid package ark:/<naan>/<name>
```

Details for the command can be found in [KGRID-CLI Documentation](http://kgrid.org/kgrid-cli/#kgrid-package-ark)

You can also use ` kgrid pacakge-all` to package all KOs in the same directory. See the section of [kgrid package-all](https://kgrid.org/kgrid-cli/#kgrid-package-all)


## Next step

Now that the KO has been properly packaged, it can be deployed to a KGrid activator or deposited to a KGrid Library.
