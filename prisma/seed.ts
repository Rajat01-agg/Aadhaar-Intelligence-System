import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    // Clean old data (safe for dev only)
    await prisma.derivedMetrics.deleteMany();
    await prisma.aggregatedAadhaarMetric.deleteMany();

    const states = [
        {
            name: "Delhi",
            districts: ["North Delhi", "South Delhi", "East Delhi"]
        },
        {
            name: "Maharashtra",
            districts: ["Mumbai", "Pune", "Nagpur"]
        }
    ];

    const metrics = [
        "enrolment",
        "biometric_update",
        "demographic_update"
    ] as const;

    const ageGroups = ["age_0_5", "age_6_17", "age_18_plus"] as const;

    const months = [
        { year: 2024, month: 10 },
        { year: 2024, month: 11 },
        { year: 2024, month: 12 }
    ];

    for (const state of states) {
        for (const district of state.districts) {
            for (const metric of metrics) {
                for (const age of ageGroups) {
                    for (const m of months) {

                        const count = Math.floor(Math.random() * 50000) + 1000;

                        // 1️⃣ Aggregated metrics
                        await prisma.aggregatedAadhaarMetric.create({
                            data: {
                                state: state.name,
                                district,
                                year: m.year,
                                month: m.month,
                                metricCategory: metric,
                                ageGroup: age,
                                totalCount: count,
                                sourceBatchId: "SEED_BATCH_001"
                            }
                        });

                        // 2️⃣ Derived metrics (indexes)
                        await prisma.derivedMetrics.create({
                            data: {
                                state: state.name,
                                district,
                                year: m.year,
                                month: m.month,
                                metricCategory: metric,
                                ageGroup: age,

                                growthRate: Math.random(),
                                deviationFromBaseline: Math.random(),
                                spikeRatio: Math.random() * 2,
                                volatility: Math.random(),

                                demandPressureIndex: Math.random(),
                                operationalStressIndex: Math.random(),
                                updateAccessibilityGap: Math.random(),
                                compositeRiskScore: Math.random(),
                                sourceBatchId: "SEED_BATCH_001"
                            }
                        });
                    }
                }
            }
        }
    }

    console.log("✅ Dummy Aadhaar data seeded successfully");
}

main()
    .catch(e => {
        console.error(e);
        process.exit(1);
    })
    .finally(() => prisma.$disconnect());
