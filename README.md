# streaming-status-physical-monitor

配信状態物理モニター の closed alpha prototype。OBS配信中、録画中、マイク、音量、BGM状態をM5Stackで表示・操作する。

## Status

- Version: 0.1.0-alpha.1
- Rank: 52 / P2 / Score 55
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
