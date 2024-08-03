import {AsyncHandler} from './../utils/AsyncHandler.js'
import Job from './../models/job.schema.js'
import Application from './../models/application.schema.js' // Ensure to import Application model
import {ApiResponse} from './../utils/ApiResponse.js'
import {ApiError} from './../utils/ApiError.js'

export const createJob = AsyncHandler(async (req, res) => {
    const {
        title,
        location,
        jobType,
        description,
        requirements,
        responsibilities,
        salaryRange,
        applicationDeadline,
        contactEmail,
        postedDate,
    } = req.body

    const newJob = await Job.create({
        title,
        location,
        jobType,
        description,
        requirements,
        responsibilities,
        salaryRange,
        applicationDeadline,
        contactEmail,
        postedDate,
    })

    console.log(newJob)

    res.status(200).json(new ApiResponse(200, newJob, 'New job created'))
})

export const showLatestJobs = AsyncHandler(async (req, res) => {
    const jobs = await Job.aggregate([
        {
            $sort: {
                createdAt: -1,
            },
        },
    ])

    if (jobs.length === 0)
        return res.status(404).json(new ApiError(404, 'Job not found'))

    res.status(200).json(new ApiResponse(200, jobs, 'Job fetched'))
})

export const applyJob = AsyncHandler(async (req, res) => {
    const jobId = req.params.id
    const {whyHireYou, pastExperience, education, additionalInfo} = req.body
    const userId = req.user.id

    const existingApplication = await Application.findOne({
        job: jobId,
        user: userId,
    })
    if (existingApplication) {
        return res
            .status(404)
            .json({message: 'This job has already been applied'})
    }

    const application = new Application({
        job: jobId,
        user: userId,
        whyHireYou,
        pastExperience,
        education,
        additionalInfo,
    })

    await application.save()

    res.status(201).json({message: 'Application submitted successfully!'})
})
