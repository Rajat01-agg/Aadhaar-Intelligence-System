import type { Request, Response } from "express";
import prisma from "../config/database.ts";

export const getDashboardOverview = async (
    req: Request,
    res: Response
) => {
    const data = await fetchDashboardOverview();

    res.json({
        success: true,
        data
    });
};


export const fetchDashboardOverview = async () => {

    // 1️⃣ Total Aadhaar activity (India-wide)
    const totalActivity = await prisma.aggregatedAadhaarMetric.aggregate({
        _sum: { totalCount: true }
    });

    // 2️⃣ Average indexes (India-level health)
    const avgIndexes = await prisma.derivedMetrics.aggregate({
        _avg: {
            demandPressureIndex: true,
            operationalStressIndex: true,
            compositeRiskScore: true
        }
    });

    // 3️⃣ High-risk districts count
    const highRiskDistricts = await prisma.derivedMetrics.count({
        where: {
            compositeRiskScore: {
                gt: 0.75
            }
        }
    });

    return {
        totalTransactions: totalActivity._sum.totalCount || 0,

        averageIndexes: {
            demandPressure: avgIndexes._avg.demandPressureIndex || 0,
            operationalStress: avgIndexes._avg.operationalStressIndex || 0,
            compositeRisk: avgIndexes._avg.compositeRiskScore || 0
        },

        highRiskDistrictCount: highRiskDistricts,

        lastUpdated: new Date().toISOString()
    };
};
