# MoonCatRescue Market Sales Data


## CatAdopted Dataset

All ownership transfers tracked via the
blockchain recorded `CatAdopted` event from the `MoonCatRescue` contract
in comma-separated values (CSV) format.
One datafile for every day with transaction count
(in parenthesis)
and filed per year
(e.g. `2017/2017-08-10_(15)` or `2021/2021-03-12_(1820)`).
Example:


```
timestamp, id, price (in eth), price (in wei), from, to, block
2017-08-10 17:52:26, 0xff00000ca7, 0.300000, 300000000000000000, 0x00000000..., 0x47dabf35..., 4141192
2017-08-10 20:04:15, 0xff04000ca7, 0.300000, 300000000000000000, 0x00000000..., 0x66007e80..., 4141588
2017-08-10 20:09:33, 0x0068f5b6d8,        -,                  -, 0xf22fe995..., 0x69017e33..., 4141603
2017-08-10 20:15:36, 0x00037fe50c,        -,                  -, 0xf22fe995..., 0x69017e33..., 4141617
...
```

Note: You can transfer mooncats for free (0 wei) than the price is set to `-,-`
in the datafile.


```
  adopt/
    ├───2017/
    │       2017-08-10_(15).csv
    │       2017-08-11_(11).csv
    │       2017-08-12_(21).csv
    │       2017-08-13_(3).csv
    │       2017-08-16_(3).csv
    │       2017-08-17_(1).csv
    │       2017-08-18_(1).csv
    │       2017-08-21_(2).csv
    │       2017-08-22_(1).csv
    │       2017-09-01_(1).csv
    │       2017-10-11_(1).csv
    │       2017-11-15_(1).csv
    │       2017-12-07_(1).csv
    │       2017-12-13_(1).csv
    │       2017-12-27_(5).csv
    │
    ├───2018/
    │       2018-01-23_(2).csv
    │       2018-01-29_(2).csv
    │       2018-01-30_(3).csv
    │       2018-02-02_(3).csv
    │       2018-02-03_(2).csv
    │       2018-02-06_(2).csv
    │       2018-02-07_(6).csv
    │       2018-02-10_(5).csv
    │       2018-03-08_(2).csv
    │       2018-03-18_(1).csv
    │       2018-03-21_(1).csv
    │       2018-03-28_(1).csv
    │       2018-03-31_(6).csv
    │       2018-04-14_(2).csv
    │       2018-04-29_(2).csv
    │       2018-06-23_(1).csv
    │
    └───2021/
            2021-03-12_(1820).csv
            2021-03-13_(5164).csv
            2021-03-14_(1660).csv
            2021-03-15_(814).csv
            2021-03-16_(497).csv
            2021-03-17_(463).csv
            2021-03-18_(416).csv
            2021-03-19_(148).csv
            2021-03-20_(292).csv
            2021-03-21_(182).csv
            2021-03-22_(101).csv
            2021-03-23_(134).csv
            2021-03-24_(93).csv
            2021-03-25_(82).csv
            2021-03-26_(50).csv
            2021-03-27_(92).csv
            2021-03-28_(21).csv
            2021-03-29_(71).csv
            2021-03-30_(18).csv
            2021-03-31_(17).csv
            2021-04-01_(35).csv
            2021-04-02_(28).csv
```

Notes:   If you see `WrappedMoonCatRescue (WMCR)`  in the `to` column than a MoonCat got wrapped
and if you see `WrappedMoonCatRescue (WMCR)` in the `from` column than the MoonCat got unwrapped.




### Your Tool Here

Do you have a tool for the mooncats dataset? Let us know! Add your tool here.



## License

![](https://publicdomainworks.github.io/buttons/zero88x31.png)

The mooncatrescue on the blockchain dataset
is dedicated to the public domain.
Use it as you please with no restrictions whatsoever.



## Questions? Comments?

Post them on the [mooncatrescue reddit](https://www.reddit.com/r/mooncatrescue). Thanks.
