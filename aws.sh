#!/bin/bash
# switch to v2
aws ecs update-service --cluster test-fargate --service nsoor --task-definition nsoor-task:5

# switch to v1
aws ecs update-service --cluster test-fargate --service nsoor --task-definition nsoor-task:4
