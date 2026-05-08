# 実装計画

- Repo: `streaming-status-physical-monitor`
- Domain: IoT
- Rank: 52 / P2 / Score 55
- Idea No: 14
- アイデア名: 配信状態物理モニター
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 責務
- `src/core`
- `src/validators`
- `src/report`
- `src/review-model`
- `src/cli`
- `app`
- `src/simulator`
- `src/device-adapter`
- `src/host-adapter`

## 工程
1. .gitattributes、README、AGENTS、SKILL、docsを配置。
2. core、validators、report、review-model、CLI、UIを実装。
3. mock device、sample telemetry、危険操作dry-run境界を実装。
4. `npm test`でvalidation、web smoke、docs ZIPを生成。
5. GitHub prerelease assetとrelease evidenceを確認。
