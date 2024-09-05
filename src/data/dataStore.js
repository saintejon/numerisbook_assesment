export const fullname = "Kevin Owena";

export const account_overview = [
      {
            title: "TOTAL PAID",
            count: 1289,
            amount: 4120102.76,
            color: "green",
      },
      {
            title: "TOTAL OVERDUE",
            count: 13,
            amount: 23000.13,
            color: "red",
      },
      {
            title: "TOTAL DRAFT",
            count: 8,
            amount: 12200.0,
            color: "gray",
      },
      {
            title: "TOTAL UNPAID",
            count: 6,
            amount: 87102.0,
            color: "yellow",
      },
];

export const invoices = [
      {
            id: "1023494 - 2304",
            date: new Date("2022-11-27"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "PAID", // Can be "PAID", "OVERDUE", "DRAFT", "PENDING PAYMENT"
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-11-27"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "OVERDUE",
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-12-08"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "DRAFT",
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-12-08"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "PENDING PAYMENT",
      },
      {
            id: "1023494 - 2304",
            date: new Date("2022-12-08"),
            dueDate: new Date("2023-05-19"),
            amount: 1311750.12,
            status: "PAID",
      },
];

export const recentActivities = [
      {
            id: 1,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z", // ISO format for the date and time
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
      },
      {
            id: 2,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z",
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
      },
      {
            id: 3,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z",
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653726/awkshunavatars/q85catpupidafbnn6nmc.png",
      },
      {
            id: 4,
            type: "Invoice creation",
            date: "2024-09-03T12:05:00Z",
            invoice: {
                  id: "00239434",
                  creator: "Olaniyi Ojo Adewale",
            },
            avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653726/awkshunavatars/q85catpupidafbnn6nmc.png",
      },
];

export const invoiceData = [
      {
            invoiceNumber: "1023494 - 2304",
            sender: {
                  name: "Fabulous Enterprise",
                  address: "4356 Jenkins Blvd, 44256 Gains, ME",
                  phone: "+356 999 876 215",
                  email: "info@fabulousenterprises.com",
                  avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653726/awkshunavatars/q85catpupidafbnn6nmc.png",
            },
            customer: {
                  name: "Olaniyi Ojo Adewale",
                  address: "835 Gifford Pike, 01275 Gooseville, VT",
                  phone: "+234 907 213 7515",
                  email: "ojo.olaniyi@customers.com",
                  avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
            },
            invoiceDetails: {
                  invoiceDate: "March 30th, 2023",
                  dueDate: "May 19th, 2023",
                  billingCurrency: "USD ($)",
            },
            paymentType: "partial",
            items: [
                  {
                        title: "Email Marketing",
                        description:
                              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
                        quantity: 10,
                        unitPrice: 1500,
                        total: 15000,
                  },
                  {
                        title: "Video looping effect",
                        description:
                              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
                        quantity: 6,
                        unitPrice: 1110.5,
                        total: 6663.0,
                  },
                  {
                        title: "Graphic design for emails",
                        description:
                              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
                        quantity: 7,
                        unitPrice: 2750,
                        total: 19250.0,
                  },
                  {
                        title: "Video looping effect",
                        description:
                              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
                        quantity: 6,
                        unitPrice: 1110.5,
                        total: 6663.0,
                  },
            ],
            summary: {
                  discountPercentage: 0.025,
                  subtotal: 6697200.0,
                  discount: 167430.0,
                  totalAmountDue: 6529770.0,
            },
            paymentInformation: {
                  accountName: "Fabulous Enterprise",
                  accountNumber: "10203040",
                  achRoutingNo: "242323223",
                  dueDate: "May 19th, 2023",
                  bankName: "Wells fargo bank",
                  bankAddress: "4356 Jenkins Blvd, 44256 Gains, ME",
            },
            reminders: [
                  {
                        value: 14,
                        title: "14 days before due date",
                        active: true, // Set to true if the reminder is currently active
                  },
                  {
                        value: 7,
                        title: "7 days before due date",
                        active: true,
                  },
                  {
                        value: 3,
                        title: "3 days before due date",
                        active: false,
                  },
                  {
                        value: 1,
                        title: "1 day before due date",
                        active: false,
                  },
                  {
                        value: 0,
                        title: "On the due date",
                        active: false,
                  },
            ],
            invoiceActivity: [
                  {
                        id: 1,
                        user: "You",
                        time: new Date("2022-09-27"),
                        action: "Created invoice",
                        details: "00239434/Olaniyi Ojo Adewale",
                        avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
                  },
                  {
                        id: 2,
                        user: "You",
                        time: new Date("2022-09-27"),
                        action: "Payment Confirmed",
                        details: "You manually confirmed a partial payment of $503,000.00",
                        avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
                  },
                  {
                        id: 3,
                        user: "You",
                        time: new Date("2022-09-27"),
                        action: "Payment Confirmed",
                        details: "You manually confirmed a full payment of $6,000,000.00",
                        avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
                  },
                  {
                        id: 4,
                        user: "You",
                        time: new Date("2022-10-27"),
                        action: "Sent Invoice",
                        details: "Sent invoice 00239434/Olaniyi Ojo Adewale to Olaniyi Ojo Adewale",
                        avatar: "https://res.cloudinary.com/de0jr8mcm/image/upload/v1697653728/awkshunavatars/nh8k72txhwihglii2ef9.png",
                  },
            ],
            notes: "Thank you for your patronage",
      },
];
