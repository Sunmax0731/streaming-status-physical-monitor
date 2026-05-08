# テスト計画

- Repo: `streaming-status-physical-monitor`
- Domain: IoT
- Rank: 52 / P2 / Score 55
- Idea No: 14
- アイデア名: 配信状態物理モニター
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\streaming-status-physical-monitor`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/streaming-status-physical-monitor-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
