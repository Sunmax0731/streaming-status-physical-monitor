# 責務分割

- Repo: `streaming-status-physical-monitor`
- Domain: IoT
- Rank: 52 / P2 / Score 55
- Idea No: 14
- アイデア名: 配信状態物理モニター
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

| 領域 | 責務 |
| --- | --- |
| `src/core` | ドメイン判定 |
| `src/validators` | 入力検証 |
| `src/report` | 結果整形 |
| `src/review-model` | QCDS評価 |
| `src/cli` | CLI入口 |
| `app` | UI |
| `src/simulator` | mock telemetry |
| `src/device-adapter` | 境界adapter |
| `src/host-adapter` | 境界adapter |

coreはDOM、GitHub、実機に依存させない。adapterは将来の実機、Android、LAN連携を差し替える境界とする。
