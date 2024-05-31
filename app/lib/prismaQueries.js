import {prisma} from './db'; 
import { unstable_noStore as noStore } from 'next/cache';


// Function to fetch overview data
export async function fetchOverview() {
  noStore(); 
  try {
    const overview = await prisma.overview.findMany();
    return overview;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch overview data.');
  }
}

// Function to fetch all users
export async function fetchUsers() {
  noStore();
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch users.');
  }
}

// Function to fetch all startups
export async function fetchStartups() {
  noStore();
  try {
    const startups = await prisma.startup.findMany();
    return startups;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch startups.');
  }
}

// Function to fetch all applications
export async function fetchApplications() {
  noStore(); 
  try {
    const applications = await prisma.application.findMany({
      include: {
        startup: true,
      },
    });
    return applications;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch applications.');
  }
}

// Function to fetch all progress reports
export async function fetchProgressReports() {
  noStore(); 
  try {
    const progressReports = await prisma.progressReport.findMany({
      include: {
        startup: true,
      },
    });
    return progressReports;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch progress reports.');
  }
}

// Function to fetch all financial tracking records
export async function fetchFinancialTracking() {
  noStore();
  try {
    const financialTracking = await prisma.financialTracking.findMany({
      include: {
        startup: true,
      },
    });
    return financialTracking;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch financial tracking records.');
  }
}

// Function to fetch user by email
export async function getUser(email) {
  noStore(); 
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

// Function to fetch a specific startup by ID
export async function fetchStartupById(id) {
  noStore(); 
  try {
    const startup = await prisma.startup.findUnique({
      where: {
        id,
      },
      include: {
        applications: true,
        progressReports: true,
        financialTrackings: true,
        users: true,
      },
    });
    return startup;
  } catch (error) {
    console.error('Failed to fetch startup:', error);
    throw new Error('Failed to fetch startup.');
  }
}
