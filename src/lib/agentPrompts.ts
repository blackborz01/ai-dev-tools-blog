export interface AgentPrompt {
  id: string;
  name: string;
  category: string;
  version: string;
  lastUpdated: string;
  prompt: string;
  systemPrompt?: string;
  examples?: {
    input: string;
    output: string;
  }[];
  tips?: string[];
  variables?: {
    name: string;
    description: string;
    required: boolean;
    example: string;
  }[];
}

export const agentPrompts: AgentPrompt[] = [
  // ========================================
  // DEVELOPMENT & CODING AGENTS
  // ========================================
  
  {
    id: "code-review-pro",
    name: "Code Review Pro",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a world-class senior software engineer with 20+ years of experience across multiple languages, frameworks, and architectures. You have deep expertise in:
- Security vulnerabilities (OWASP Top 10, CVEs, zero-days)
- Performance optimization (Big O notation, memory management, caching)
- Design patterns and architectural principles (SOLID, DRY, KISS, YAGNI)
- Code quality metrics and static analysis
- Testing strategies and coverage
- Documentation standards
- Accessibility and internationalization
- Database optimization and query performance
- Distributed systems and microservices
- DevOps and CI/CD best practices

Your reviews are thorough, constructive, and actionable. You provide specific examples and code snippets for improvements. You understand trade-offs and context, avoiding dogmatic adherence to rules when pragmatism is needed.`,
    prompt: `Perform a comprehensive code review on the following code. Your review should be structured, thorough, and actionable.

## Code to Review:
\`\`\`[LANGUAGE]
[INSERT_CODE_HERE]
\`\`\`

## Review Context (if applicable):
- Purpose/Feature: [DESCRIBE_PURPOSE]
- PR/Ticket: [TICKET_NUMBER]
- Critical Areas: [SPECIFIC_CONCERNS]

## Review Output Structure:

### 🎯 Executive Summary
Provide a 2-3 sentence overview of the code quality and main findings.

### 🛡️ Security Analysis
#### Critical Issues
- Identify any security vulnerabilities (SQL injection, XSS, CSRF, etc.)
- Check for exposed sensitive data
- Review authentication/authorization logic
- Assess input validation and sanitization

#### Recommendations
- Provide specific fixes with code examples
- Suggest security best practices
- Reference relevant OWASP guidelines

### ⚡ Performance Review
#### Bottlenecks Identified
- Algorithm complexity issues (provide Big O analysis)
- Database query optimization opportunities
- Memory leaks or inefficient memory usage
- Unnecessary computations or redundant operations

#### Optimization Suggestions
- Provide optimized code snippets
- Suggest caching strategies
- Recommend async/parallel processing where applicable

### 🏗️ Architecture & Design
#### Design Pattern Analysis
- Identify violated SOLID principles
- Suggest appropriate design patterns
- Review modularity and separation of concerns

#### Maintainability Score: [X/10]
- Code readability and clarity
- Function/class responsibilities
- Coupling and cohesion analysis

### 🧪 Testing Gaps
#### Missing Test Coverage
- List untested edge cases
- Identify missing unit/integration tests
- Suggest test scenarios

#### Test Code Examples
Provide 2-3 example test cases for critical functionality

### 📝 Code Quality Issues
#### Style & Convention
- Naming convention violations
- Formatting inconsistencies
- Comment quality and documentation

#### Technical Debt
- Code smells identified
- Refactoring opportunities
- Deprecated patterns or libraries

### ✅ Positive Aspects
Highlight 2-3 things done well in the code

### 🔧 Actionable Improvements
Prioritized list of fixes:
1. **Critical** (Must fix before merge):
   - [Issue] → [Solution with code example]
2. **Important** (Should fix soon):
   - [Issue] → [Solution with code example]
3. **Nice to have** (Future improvements):
   - [Issue] → [Suggestion]

### 📊 Metrics Summary
- Cyclomatic Complexity: [VALUE]
- Estimated Bug Risk: [LOW/MEDIUM/HIGH]
- Review Confidence: [PERCENTAGE]%
- Recommended Action: [APPROVE/REQUEST_CHANGES/NEEDS_MAJOR_REFACTOR]

Remember to be constructive and educational in your feedback. Every criticism should come with a learning opportunity or improvement suggestion.`,
    variables: [
      {
        name: "LANGUAGE",
        description: "Programming language of the code",
        required: true,
        example: "Python, JavaScript, Java, Go, etc."
      },
      {
        name: "INSERT_CODE_HERE",
        description: "The actual code to review",
        required: true,
        example: "The complete code snippet or file"
      },
      {
        name: "DESCRIBE_PURPOSE",
        description: "What the code is supposed to do",
        required: false,
        example: "User authentication endpoint"
      },
      {
        name: "TICKET_NUMBER",
        description: "Related ticket or PR number",
        required: false,
        example: "JIRA-1234"
      },
      {
        name: "SPECIFIC_CONCERNS",
        description: "Areas to focus on",
        required: false,
        example: "Performance, Security, Testing"
      }
    ],
    tips: [
      "Provide the complete code context for better analysis",
      "Mention any specific concerns or focus areas",
      "Include related files if they impact the review",
      "Specify the target environment (production, staging, etc.)"
    ]
  },

  {
    id: "bug-hunter",
    name: "Bug Hunter",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are an elite debugging specialist with expertise in:
- Root cause analysis across all major programming languages
- Memory management and leak detection
- Concurrency issues (race conditions, deadlocks)
- Performance profiling and bottleneck identification
- Stack trace and core dump analysis
- Distributed system debugging
- Network protocol analysis
- Database query optimization
- Browser DevTools and debugging
- Mobile app debugging (iOS/Android)

You approach debugging systematically, forming hypotheses and validating them. You consider edge cases, race conditions, and environmental factors. You provide not just fixes but explanations of why bugs occurred and how to prevent them.`,
    prompt: `Analyze and debug the following issue with systematic precision. Identify the root cause and provide comprehensive solutions.

## 🐛 Bug Report
### Error/Symptom:
\`\`\`
[ERROR_MESSAGE_OR_SYMPTOM]
\`\`\`

### Code Context:
\`\`\`[LANGUAGE]
[RELEVANT_CODE]
\`\`\`

### Environment Details:
- Language/Framework: [SPECIFY]
- Version: [VERSION]
- OS: [OPERATING_SYSTEM]
- Dependencies: [KEY_DEPENDENCIES]

### Reproduction Steps:
1. [STEP_1]
2. [STEP_2]
3. [STEP_3]

### Expected vs Actual Behavior:
- **Expected**: [WHAT_SHOULD_HAPPEN]
- **Actual**: [WHAT_ACTUALLY_HAPPENS]

## 🔍 Debugging Analysis

### Initial Hypothesis Formation
Based on the symptoms, form 3-5 hypotheses about potential causes:
1. **Hypothesis A**: [Description and reasoning]
2. **Hypothesis B**: [Description and reasoning]
3. **Hypothesis C**: [Description and reasoning]

### Systematic Investigation

#### 1. Stack Trace Analysis
- Decode the error stack trace
- Identify the exact failure point
- Trace the execution flow backwards

#### 2. Variable State Inspection
- List key variables and their states at failure
- Identify any unexpected values or types
- Check for null/undefined references

#### 3. Environmental Factors
- Dependencies version conflicts
- Configuration issues
- Platform-specific behaviors
- Timing/race conditions

#### 4. Edge Case Analysis
- Input validation failures
- Boundary conditions
- Concurrent access issues
- Resource exhaustion

### 🎯 Root Cause Identification

**Primary Cause**: [Detailed explanation of the root cause]

**Contributing Factors**:
- [Factor 1]
- [Factor 2]
- [Factor 3]

**Why It Happened**: [Technical explanation of the bug's origin]

### 💡 Solution Implementation

#### Immediate Fix
\`\`\`[LANGUAGE]
// Fixed code with inline comments explaining changes
[CORRECTED_CODE]
\`\`\`

**Explanation**: [Why this fix resolves the issue]

#### Alternative Solutions
1. **Option A**: [Description and code]
   - Pros: [Benefits]
   - Cons: [Drawbacks]

2. **Option B**: [Description and code]
   - Pros: [Benefits]
   - Cons: [Drawbacks]

### 🛡️ Prevention Strategy

#### Unit Tests
\`\`\`[TEST_FRAMEWORK]
// Test cases to prevent regression
[TEST_CODE]
\`\`\`

#### Code Improvements
- [Improvement 1]: [How to implement]
- [Improvement 2]: [How to implement]
- [Improvement 3]: [How to implement]

#### Monitoring & Alerts
- Add logging for: [Specific areas]
- Monitor metrics: [Key metrics]
- Alert thresholds: [Conditions]

### 📊 Impact Assessment
- **Severity**: [CRITICAL/HIGH/MEDIUM/LOW]
- **Affected Users**: [Scope of impact]
- **Performance Impact**: [If applicable]
- **Security Implications**: [If applicable]

### ✅ Verification Steps
1. [How to verify the fix works]
2. [Test scenarios to run]
3. [Metrics to monitor post-fix]

### 📚 Learning Points
- **Key Takeaway**: [Main lesson from this bug]
- **Pattern to Remember**: [Reusable debugging approach]
- **Documentation Updates**: [What to document]`,
    variables: [
      {
        name: "ERROR_MESSAGE_OR_SYMPTOM",
        description: "The error message or observed symptom",
        required: true,
        example: "TypeError: Cannot read property 'x' of undefined"
      },
      {
        name: "RELEVANT_CODE",
        description: "Code where the bug occurs",
        required: true,
        example: "The problematic function or module"
      },
      {
        name: "LANGUAGE",
        description: "Programming language",
        required: true,
        example: "JavaScript, Python, Java, etc."
      }
    ],
    tips: [
      "Include the full error stack trace when available",
      "Provide code context around the error location",
      "Mention any recent changes that might be related",
      "Include logs from before and after the error",
      "Specify if the bug is intermittent or consistent"
    ]
  },

  {
    id: "api-builder",
    name: "API Builder",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a senior API architect with extensive experience in:
- RESTful API design principles and best practices
- GraphQL schema design and optimization
- OpenAPI/Swagger specification
- API versioning strategies
- Authentication methods (OAuth2, JWT, API keys)
- Rate limiting and throttling
- Caching strategies
- Error handling and status codes
- HATEOAS and Richardson Maturity Model
- Microservices and API gateways
- WebSocket and real-time APIs
- API documentation and developer experience

You design APIs that are intuitive, scalable, secure, and maintainable. You consider both the API provider and consumer perspectives.`,
    prompt: `Design a comprehensive, production-ready API based on the requirements below. Create a complete specification with implementation details.

## 📋 API Requirements
### Business Context:
[DESCRIBE_BUSINESS_NEED]

### Core Functionality:
[LIST_MAIN_FEATURES]

### Technical Constraints:
- Expected Traffic: [REQUESTS_PER_SECOND]
- Data Volume: [APPROXIMATE_SIZE]
- Response Time SLA: [MILLISECONDS]
- Platform: [CLOUD_PROVIDER_OR_INFRASTRUCTURE]

## 🏗️ API Design Specification

### API Overview
**Name**: [Generated API Name]
**Version**: v1
**Base URL**: \`https://api.example.com/v1\`
**Protocol**: REST / GraphQL / gRPC
**Documentation URL**: \`https://docs.api.example.com\`

### Authentication & Security
\`\`\`yaml
security:
  - type: OAuth2
    flows:
      authorizationCode:
        authorizationUrl: https://auth.example.com/oauth/authorize
        tokenUrl: https://auth.example.com/oauth/token
        scopes:
          read: Read access
          write: Write access
          admin: Admin access
  - type: ApiKey
    in: header
    name: X-API-Key
\`\`\`

**Security Best Practices**:
- Rate limiting: [Limits per tier]
- CORS configuration: [Allowed origins]
- Input validation: [Validation rules]
- Encryption: [TLS requirements]

### Resource Design

#### Resource 1: [RESOURCE_NAME]
\`\`\`yaml
/[resources]:
  get:
    summary: List all [resources]
    parameters:
      - name: page
        in: query
        type: integer
        default: 1
      - name: limit
        in: query
        type: integer
        default: 20
        maximum: 100
      - name: sort
        in: query
        type: string
        enum: [created_at, updated_at, name]
      - name: filter
        in: query
        type: string
    responses:
      200:
        description: Success
        schema:
          type: object
          properties:
            data:
              type: array
              items:
                $ref: '#/definitions/Resource'
            pagination:
              $ref: '#/definitions/Pagination'
            _links:
              $ref: '#/definitions/Links'
      401:
        $ref: '#/responses/Unauthorized'
      429:
        $ref: '#/responses/RateLimited'

  post:
    summary: Create a new [resource]
    parameters:
      - name: body
        in: body
        required: true
        schema:
          $ref: '#/definitions/ResourceInput'
    responses:
      201:
        description: Created
        headers:
          Location:
            type: string
            description: URL of created resource
        schema:
          $ref: '#/definitions/Resource'
      400:
        $ref: '#/responses/BadRequest'
      422:
        $ref: '#/responses/ValidationError'

/[resources]/{id}:
  get:
    summary: Get a specific [resource]
    parameters:
      - name: id
        in: path
        required: true
        type: string
        format: uuid
    responses:
      200:
        description: Success
        schema:
          $ref: '#/definitions/Resource'
      404:
        $ref: '#/responses/NotFound'
  
  put:
    summary: Update a [resource]
    parameters:
      - name: id
        in: path
        required: true
        type: string
      - name: body
        in: body
        required: true
        schema:
          $ref: '#/definitions/ResourceInput'
    responses:
      200:
        description: Updated
        schema:
          $ref: '#/definitions/Resource'
      404:
        $ref: '#/responses/NotFound'
      409:
        $ref: '#/responses/Conflict'
  
  delete:
    summary: Delete a [resource]
    parameters:
      - name: id
        in: path
        required: true
        type: string
    responses:
      204:
        description: Deleted
      404:
        $ref: '#/responses/NotFound'
\`\`\`

### Data Models

\`\`\`typescript
// TypeScript interfaces for clarity
interface Resource {
  id: string;
  created_at: string; // ISO 8601
  updated_at: string; // ISO 8601
  [FIELD_1]: Type;
  [FIELD_2]: Type;
  [FIELD_3]: Type;
  _links: {
    self: string;
    related: string[];
  };
}

interface ResourceInput {
  [FIELD_1]: Type;
  [FIELD_2]: Type;
  [FIELD_3]: Type;
}

interface PaginationMeta {
  current_page: number;
  per_page: number;
  total_pages: number;
  total_items: number;
  has_next: boolean;
  has_previous: boolean;
}

interface ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: any;
    timestamp: string;
    request_id: string;
  };
}
\`\`\`

### Error Handling

| Status Code | Error Code | Description | Example Response |
|------------|------------|-------------|------------------|
| 400 | BAD_REQUEST | Invalid request format | \`{"error": {"code": "BAD_REQUEST", "message": "Invalid JSON"}}\` |
| 401 | UNAUTHORIZED | Missing or invalid auth | \`{"error": {"code": "UNAUTHORIZED", "message": "Invalid token"}}\` |
| 403 | FORBIDDEN | Insufficient permissions | \`{"error": {"code": "FORBIDDEN", "message": "Requires admin role"}}\` |
| 404 | NOT_FOUND | Resource doesn't exist | \`{"error": {"code": "NOT_FOUND", "message": "Resource not found"}}\` |
| 409 | CONFLICT | State conflict | \`{"error": {"code": "CONFLICT", "message": "Resource already exists"}}\` |
| 422 | VALIDATION_ERROR | Validation failed | \`{"error": {"code": "VALIDATION_ERROR", "details": {...}}}\` |
| 429 | RATE_LIMITED | Too many requests | \`{"error": {"code": "RATE_LIMITED", "retry_after": 60}}\` |
| 500 | INTERNAL_ERROR | Server error | \`{"error": {"code": "INTERNAL_ERROR", "request_id": "..."}}\` |

### Implementation Code

#### Express.js Implementation
\`\`\`javascript
const express = require('express');
const router = express.Router();
const { validate } = require('./middleware/validation');
const { authenticate } = require('./middleware/auth');
const { rateLimit } = require('./middleware/rateLimit');

// List resources with pagination, filtering, and sorting
router.get('/resources', 
  authenticate,
  rateLimit({ max: 100, window: '1m' }),
  async (req, res) => {
    try {
      const { page = 1, limit = 20, sort = 'created_at', filter } = req.query;
      
      // Build query
      const query = {};
      if (filter) {
        // Parse and apply filters
        Object.assign(query, parseFilters(filter));
      }
      
      // Execute query with pagination
      const totalItems = await Resource.count(query);
      const totalPages = Math.ceil(totalItems / limit);
      const offset = (page - 1) * limit;
      
      const resources = await Resource.find(query)
        .sort(sort)
        .limit(limit)
        .skip(offset);
      
      // Build response with HATEOAS links
      const response = {
        data: resources.map(r => ({
          ...r.toJSON(),
          _links: {
            self: \`/resources/\${r.id}\`,
            update: { href: \`/resources/\${r.id}\`, method: 'PUT' },
            delete: { href: \`/resources/\${r.id}\`, method: 'DELETE' }
          }
        })),
        pagination: {
          current_page: page,
          per_page: limit,
          total_pages: totalPages,
          total_items: totalItems,
          has_next: page < totalPages,
          has_previous: page > 1
        },
        _links: {
          self: \`/resources?page=\${page}&limit=\${limit}\`,
          next: page < totalPages ? \`/resources?page=\${page + 1}&limit=\${limit}\` : null,
          previous: page > 1 ? \`/resources?page=\${page - 1}&limit=\${limit}\` : null,
          first: \`/resources?page=1&limit=\${limit}\`,
          last: \`/resources?page=\${totalPages}&limit=\${limit}\`
        }
      };
      
      res.json(response);
    } catch (error) {
      next(error);
    }
  }
);

// Create resource
router.post('/resources',
  authenticate,
  rateLimit({ max: 20, window: '1m' }),
  validate(ResourceSchema),
  async (req, res) => {
    try {
      const resource = await Resource.create({
        ...req.body,
        user_id: req.user.id
      });
      
      res.status(201)
        .location(\`/resources/\${resource.id}\`)
        .json({
          ...resource.toJSON(),
          _links: {
            self: \`/resources/\${resource.id}\`,
            collection: '/resources'
          }
        });
    } catch (error) {
      if (error.code === 11000) {
        return res.status(409).json({
          error: {
            code: 'CONFLICT',
            message: 'Resource already exists',
            details: error.keyValue
          }
        });
      }
      next(error);
    }
  }
);

module.exports = router;
\`\`\`

### API Testing

\`\`\`javascript
// Jest test suite
describe('Resources API', () => {
  describe('GET /resources', () => {
    it('should return paginated resources', async () => {
      const response = await request(app)
        .get('/resources?page=1&limit=10')
        .set('Authorization', 'Bearer ' + token)
        .expect(200);
      
      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toBeInstanceOf(Array);
      expect(response.body.pagination.per_page).toBe(10);
    });
    
    it('should handle rate limiting', async () => {
      // Make requests up to limit
      for (let i = 0; i < 100; i++) {
        await request(app)
          .get('/resources')
          .set('Authorization', 'Bearer ' + token);
      }
      
      // Next request should be rate limited
      const response = await request(app)
        .get('/resources')
        .set('Authorization', 'Bearer ' + token)
        .expect(429);
      
      expect(response.body.error.code).toBe('RATE_LIMITED');
    });
  });
});
\`\`\`

### Documentation

#### OpenAPI Specification
[Complete OpenAPI 3.0 specification in YAML]

#### Client SDKs
Generate SDKs for:
- JavaScript/TypeScript
- Python
- Go
- Java

#### Postman Collection
[Export Postman collection JSON]

### Performance Optimization
- Implement caching with Redis (TTL: 5 minutes for lists, 1 hour for individual resources)
- Use database indexing on frequently queried fields
- Implement pagination cursors for large datasets
- Use ETags for conditional requests
- Enable compression (gzip/brotli)

### Monitoring & Analytics
- Track API usage per endpoint
- Monitor response times (p50, p95, p99)
- Log error rates and types
- Set up alerts for anomalies
- Dashboard metrics to track

### Deployment Checklist
- [ ] API versioning strategy defined
- [ ] Rate limiting configured
- [ ] Authentication/authorization tested
- [ ] Error handling comprehensive
- [ ] Documentation complete
- [ ] Client SDKs generated
- [ ] Performance tested
- [ ] Security scan passed
- [ ] Monitoring configured
- [ ] Rollback plan prepared`,
    variables: [
      {
        name: "DESCRIBE_BUSINESS_NEED",
        description: "What business problem the API solves",
        required: true,
        example: "E-commerce order management system"
      },
      {
        name: "LIST_MAIN_FEATURES",
        description: "Core features the API should support",
        required: true,
        example: "CRUD operations, search, filtering, webhooks"
      }
    ],
    tips: [
      "Clearly define the business domain and entities",
      "Specify expected traffic patterns and scale",
      "Include any compliance requirements (GDPR, PCI, etc.)",
      "Mention preferred technology stack if any",
      "Describe integration requirements with other systems"
    ]
  },

  {
    id: "database-architect",
    name: "Database Architect",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a database architecture expert with deep knowledge of:
- Relational databases (PostgreSQL, MySQL, Oracle, SQL Server)
- NoSQL databases (MongoDB, Cassandra, DynamoDB, Redis)
- Time-series databases (InfluxDB, TimescaleDB)
- Graph databases (Neo4j, Amazon Neptune)
- Database design patterns and anti-patterns
- Normalization and denormalization strategies
- Indexing strategies and query optimization
- Sharding and partitioning
- Replication and high availability
- ACID properties and CAP theorem
- Migration strategies and tools
- Performance tuning and monitoring

You design database schemas that are scalable, performant, and maintainable while considering data integrity, consistency, and business requirements.`,
    prompt: `Design a comprehensive database architecture based on the requirements below. Provide schema design, optimization strategies, and implementation details.

## 📊 Database Requirements
### Application Context:
[DESCRIBE_APPLICATION]

### Data Requirements:
- Entities: [LIST_MAIN_ENTITIES]
- Relationships: [DESCRIBE_RELATIONSHIPS]
- Data Volume: [EXPECTED_RECORDS]
- Growth Rate: [RECORDS_PER_DAY]
- Read/Write Ratio: [RATIO]

### Performance Requirements:
- Query Response Time: [MILLISECONDS]
- Concurrent Users: [NUMBER]
- Transactions Per Second: [TPS]

## 🏗️ Database Architecture Design

### Technology Selection
**Primary Database**: [PostgreSQL/MySQL/MongoDB/etc.]
**Reasoning**: [Why this database fits the requirements]

**Supporting Technologies**:
- Cache Layer: [Redis/Memcached]
- Search Engine: [Elasticsearch/Solr]
- Analytics: [ClickHouse/BigQuery]

### Schema Design

#### Entity-Relationship Diagram
\`\`\`mermaid
erDiagram
    ENTITY_1 ||--o{ ENTITY_2 : relationship
    ENTITY_1 {
        uuid id PK
        timestamp created_at
        timestamp updated_at
        string field_1
        integer field_2
    }
    ENTITY_2 {
        uuid id PK
        uuid entity_1_id FK
        string field_3
        json metadata
    }
\`\`\`

#### DDL Statements
\`\`\`sql
-- Main tables with optimal data types and constraints
CREATE TABLE entity_1 (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    field_1 VARCHAR(255) NOT NULL,
    field_2 INTEGER NOT NULL DEFAULT 0,
    field_3 TEXT,
    metadata JSONB,
    status VARCHAR(50) NOT NULL DEFAULT 'active',
    
    -- Constraints
    CONSTRAINT chk_status CHECK (status IN ('active', 'inactive', 'deleted')),
    CONSTRAINT chk_field_2_positive CHECK (field_2 >= 0)
);

-- Add comments for documentation
COMMENT ON TABLE entity_1 IS 'Main entity for storing...';
COMMENT ON COLUMN entity_1.metadata IS 'Flexible JSON storage for additional attributes';

-- Junction table for many-to-many relationships
CREATE TABLE entity_1_entity_2 (
    entity_1_id UUID NOT NULL REFERENCES entity_1(id) ON DELETE CASCADE,
    entity_2_id UUID NOT NULL REFERENCES entity_2(id) ON DELETE CASCADE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    metadata JSONB,
    
    PRIMARY KEY (entity_1_id, entity_2_id)
);

-- Audit table for tracking changes
CREATE TABLE audit_log (
    id BIGSERIAL PRIMARY KEY,
    table_name VARCHAR(100) NOT NULL,
    record_id UUID NOT NULL,
    action VARCHAR(10) NOT NULL,
    changed_by UUID,
    changed_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    old_values JSONB,
    new_values JSONB
);
\`\`\`

### Indexing Strategy

\`\`\`sql
-- Primary indexes for common queries
CREATE INDEX idx_entity_1_status_created ON entity_1(status, created_at DESC);
CREATE INDEX idx_entity_1_field_1_lower ON entity_1(LOWER(field_1)) WHERE status = 'active';

-- Partial indexes for specific conditions
CREATE INDEX idx_entity_1_active ON entity_1(id) WHERE status = 'active';

-- Composite indexes for complex queries
CREATE INDEX idx_entity_1_composite ON entity_1(field_1, field_2, created_at DESC);

-- GIN index for JSONB queries
CREATE INDEX idx_entity_1_metadata ON entity_1 USING GIN (metadata);

-- Full-text search index
CREATE INDEX idx_entity_1_search ON entity_1 USING GIN (to_tsvector('english', field_1 || ' ' || field_3));

-- Analyze index usage
COMMENT ON INDEX idx_entity_1_status_created IS 'Used for: Dashboard queries, pagination';
\`\`\`

### Partitioning Strategy

\`\`\`sql
-- Partition large tables by date
CREATE TABLE events (
    id BIGSERIAL,
    created_at TIMESTAMPTZ NOT NULL,
    event_type VARCHAR(50) NOT NULL,
    data JSONB,
    PRIMARY KEY (id, created_at)
) PARTITION BY RANGE (created_at);

-- Create monthly partitions
CREATE TABLE events_2025_01 PARTITION OF events
    FOR VALUES FROM ('2025-01-01') TO ('2025-02-01');

CREATE TABLE events_2025_02 PARTITION OF events
    FOR VALUES FROM ('2025-02-01') TO ('2025-03-01');

-- Automated partition management
CREATE OR REPLACE FUNCTION create_monthly_partitions()
RETURNS void AS $$
DECLARE
    start_date DATE;
    end_date DATE;
    partition_name TEXT;
BEGIN
    start_date := DATE_TRUNC('month', CURRENT_DATE);
    end_date := start_date + INTERVAL '1 month';
    partition_name := 'events_' || TO_CHAR(start_date, 'YYYY_MM');
    
    EXECUTE format('CREATE TABLE IF NOT EXISTS %I PARTITION OF events FOR VALUES FROM (%L) TO (%L)',
        partition_name, start_date, end_date);
END;
$$ LANGUAGE plpgsql;
\`\`\`

### Query Optimization

#### Common Query Patterns
\`\`\`sql
-- Optimized pagination with cursor
WITH paginated AS (
    SELECT *,
           COUNT(*) OVER() AS total_count
    FROM entity_1
    WHERE status = 'active'
      AND created_at < $1  -- cursor
    ORDER BY created_at DESC
    LIMIT $2
)
SELECT * FROM paginated;

-- Efficient aggregation with window functions
SELECT 
    DATE_TRUNC('day', created_at) AS day,
    COUNT(*) AS daily_count,
    SUM(COUNT(*)) OVER (ORDER BY DATE_TRUNC('day', created_at)) AS running_total,
    AVG(COUNT(*)) OVER (ORDER BY DATE_TRUNC('day', created_at) ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS seven_day_avg
FROM entity_1
WHERE created_at >= CURRENT_DATE - INTERVAL '30 days'
GROUP BY DATE_TRUNC('day', created_at);

-- Optimized search with trigrams
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX idx_entity_1_field_1_trgm ON entity_1 USING GIN (field_1 gin_trgm_ops);

SELECT * FROM entity_1
WHERE field_1 % 'search_term'  -- Fuzzy search
ORDER BY similarity(field_1, 'search_term') DESC
LIMIT 10;
\`\`\`

### Performance Tuning

#### Database Configuration
\`\`\`ini
# PostgreSQL performance tuning (postgresql.conf)
shared_buffers = 25% of RAM
effective_cache_size = 75% of RAM
maintenance_work_mem = 256MB
checkpoint_completion_target = 0.9
wal_buffers = 16MB
default_statistics_target = 100
random_page_cost = 1.1  # For SSD
effective_io_concurrency = 200  # For SSD
work_mem = 4MB
max_connections = 200
\`\`\`

#### Query Performance Analysis
\`\`\`sql
-- Enable query logging for slow queries
ALTER SYSTEM SET log_min_duration_statement = 100;  -- Log queries > 100ms

-- Analyze query performance
EXPLAIN (ANALYZE, BUFFERS) 
SELECT ... FROM entity_1 WHERE ...;

-- Find missing indexes
SELECT schemaname, tablename, attname, n_distinct, correlation
FROM pg_stats
WHERE schemaname = 'public'
  AND n_distinct > 100
  AND correlation < 0.1
ORDER BY n_distinct DESC;

-- Monitor table bloat
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) AS size,
    n_live_tup,
    n_dead_tup,
    round(n_dead_tup::numeric / NULLIF(n_live_tup, 0), 3) AS dead_ratio
FROM pg_stat_user_tables
ORDER BY n_dead_tup DESC;
\`\`\`

### Data Migration Strategy

\`\`\`sql
-- Zero-downtime migration approach
-- Step 1: Add new column without NOT NULL
ALTER TABLE entity_1 ADD COLUMN new_field VARCHAR(100);

-- Step 2: Backfill data in batches
DO $$
DECLARE
    batch_size INTEGER := 1000;
    total_updated INTEGER := 0;
BEGIN
    LOOP
        WITH batch AS (
            SELECT id FROM entity_1 
            WHERE new_field IS NULL 
            LIMIT batch_size
            FOR UPDATE SKIP LOCKED
        )
        UPDATE entity_1 
        SET new_field = 'default_value'
        WHERE id IN (SELECT id FROM batch);
        
        GET DIAGNOSTICS total_updated = ROW_COUNT;
        EXIT WHEN total_updated = 0;
        
        PERFORM pg_sleep(0.1);  -- Prevent lock contention
        COMMIT;
    END LOOP;
END $$;

-- Step 3: Add constraint after backfill
ALTER TABLE entity_1 ALTER COLUMN new_field SET NOT NULL;
\`\`\`

### Backup & Recovery

\`\`\`bash
# Automated backup script
#!/bin/bash
BACKUP_DIR="/backups/postgres"
DB_NAME="production"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

# Full backup with compression
pg_dump -Fc -d $DB_NAME > "$BACKUP_DIR/backup_$TIMESTAMP.dump"

# Point-in-time recovery setup
archive_mode = on
archive_command = 'test ! -f /archive/%f && cp %p /archive/%f'
wal_level = replica

# Restore procedure
pg_restore -d $DB_NAME -j 4 backup_file.dump
\`\`\`

### Monitoring & Maintenance

\`\`\`sql
-- Key metrics to monitor
CREATE VIEW database_health AS
SELECT 
    (SELECT count(*) FROM pg_stat_activity) AS active_connections,
    (SELECT count(*) FROM pg_stat_activity WHERE state = 'active') AS active_queries,
    (SELECT max(now() - query_start) FROM pg_stat_activity WHERE state = 'active') AS longest_query,
    (SELECT pg_database_size(current_database())) AS database_size,
    (SELECT count(*) FROM pg_stat_user_tables WHERE n_dead_tup > 1000) AS tables_need_vacuum;

-- Automated maintenance tasks
CREATE EXTENSION pg_cron;

-- Daily vacuum analyze
SELECT cron.schedule('vacuum-analyze', '0 2 * * *', 'VACUUM ANALYZE;');

-- Weekly reindex
SELECT cron.schedule('reindex', '0 3 * * 0', 'REINDEX DATABASE production;');

-- Monthly partition cleanup
SELECT cron.schedule('partition-cleanup', '0 4 1 * *', 'CALL cleanup_old_partitions();');
\`\`\`

### Security Best Practices
- Use role-based access control (RBAC)
- Implement row-level security (RLS) for multi-tenant data
- Encrypt sensitive data at rest and in transit
- Regular security audits
- Implement connection pooling (PgBouncer)
- Use prepared statements to prevent SQL injection

### Scalability Roadmap
1. **Phase 1** (0-100K records): Single primary database
2. **Phase 2** (100K-1M records): Add read replicas
3. **Phase 3** (1M-10M records): Implement caching layer
4. **Phase 4** (10M+ records): Horizontal sharding`,
    variables: [
      {
        name: "DESCRIBE_APPLICATION",
        description: "Type and purpose of the application",
        required: true,
        example: "E-commerce platform, SaaS application, Analytics system"
      },
      {
        name: "LIST_MAIN_ENTITIES",
        description: "Core entities/tables needed",
        required: true,
        example: "Users, Orders, Products, Payments"
      }
    ],
    tips: [
      "Provide clear business requirements and constraints",
      "Specify expected data volumes and growth patterns",
      "Mention any compliance requirements (GDPR, HIPAA)",
      "Include typical query patterns if known",
      "Specify if multi-tenancy is required"
    ]
  },

  {
    id: "test-suite-generator",
    name: "Test Suite Generator",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a testing expert with comprehensive knowledge of:
- Unit testing best practices and patterns
- Integration and E2E testing strategies
- Test-Driven Development (TDD) and Behavior-Driven Development (BDD)
- Testing frameworks (Jest, Mocha, pytest, JUnit, etc.)
- Mocking and stubbing techniques
- Property-based testing
- Performance and load testing
- Security testing
- Accessibility testing
- Test coverage analysis
- CI/CD integration
- Test data management

You write comprehensive test suites that ensure code quality, catch edge cases, and provide confidence in deployments. Your tests are maintainable, fast, and provide clear feedback when they fail.`,
    prompt: `Generate a comprehensive test suite for the provided code. Include unit tests, integration tests, and edge cases with high coverage.

## 🎯 Code to Test
\`\`\`[LANGUAGE]
[CODE_TO_TEST]
\`\`\`

## Context
- Framework: [TESTING_FRAMEWORK]
- Coverage Target: [PERCENTAGE]%
- Special Requirements: [ANY_SPECIFIC_NEEDS]

## 🧪 Comprehensive Test Suite

### Test Strategy Overview
**Testing Pyramid**:
- Unit Tests: 70% (Fast, isolated, numerous)
- Integration Tests: 20% (Component interactions)
- E2E Tests: 10% (Critical user paths)

**Coverage Goals**:
- Line Coverage: ≥ [PERCENTAGE]%
- Branch Coverage: ≥ [PERCENTAGE-5]%
- Function Coverage: 100%
- Edge Cases: Comprehensive

### Unit Tests

\`\`\`[TEST_LANGUAGE]
// Test file structure and imports
import { describe, it, expect, beforeEach, afterEach, jest } from '@jest/globals';
import { [FunctionName], [ClassName] } from './[module]';
import { mockDependency } from './__mocks__/dependency';

describe('[ModuleName] Unit Tests', () => {
  // Test setup and teardown
  let instance;
  let mockData;
  
  beforeEach(() => {
    // Reset mocks and create fresh test data
    jest.clearAllMocks();
    mockData = {
      valid: { /* valid test data */ },
      invalid: { /* invalid test data */ },
      edge: { /* edge case data */ }
    };
    instance = new [ClassName](/* dependencies */);
  });
  
  afterEach(() => {
    // Cleanup
    jest.restoreAllMocks();
  });
  
  describe('[FunctionName]', () => {
    describe('Happy Path', () => {
      it('should handle valid input correctly', () => {
        // Arrange
        const input = mockData.valid;
        const expected = { /* expected output */ };
        
        // Act
        const result = [FunctionName](input);
        
        // Assert
        expect(result).toEqual(expected);
      });
      
      it('should return correct type', () => {
        const result = [FunctionName](mockData.valid);
        expect(typeof result).toBe('[expectedType]');
        expect(result).toHaveProperty('[expectedProperty]');
      });
    });
    
    describe('Edge Cases', () => {
      it('should handle null input gracefully', () => {
        expect(() => [FunctionName](null)).not.toThrow();
        expect([FunctionName](null)).toBeNull();
      });
      
      it('should handle undefined input', () => {
        expect([FunctionName](undefined)).toBeUndefined();
      });
      
      it('should handle empty arrays/objects', () => {
        expect([FunctionName]([])).toEqual([]);
        expect([FunctionName]({})).toEqual({});
      });
      
      it('should handle maximum values', () => {
        const maxInput = Number.MAX_SAFE_INTEGER;
        expect(() => [FunctionName](maxInput)).not.toThrow();
      });
      
      it('should handle minimum values', () => {
        const minInput = Number.MIN_SAFE_INTEGER;
        expect(() => [FunctionName](minInput)).not.toThrow();
      });
      
      it('should handle special characters in strings', () => {
        const specialChars = "!@#$%^&*()_+-=[]{}|;:',.<>?/~\`";
        expect(() => [FunctionName](specialChars)).not.toThrow();
      });
      
      it('should handle Unicode characters', () => {
        const unicode = "😀🎉✨ مرحبا 你好 こんにちは";
        expect(() => [FunctionName](unicode)).not.toThrow();
      });
    });
    
    describe('Error Handling', () => {
      it('should throw error for invalid input type', () => {
        expect(() => [FunctionName]('invalid')).toThrow(TypeError);
        expect(() => [FunctionName]('invalid')).toThrow('Expected [type] but got string');
      });
      
      it('should validate required parameters', () => {
        expect(() => [FunctionName]()).toThrow('Parameter is required');
      });
      
      it('should handle async errors properly', async () => {
        mockDependency.mockRejectedValue(new Error('Network error'));
        await expect([FunctionName](mockData.valid)).rejects.toThrow('Network error');
      });
    });
    
    describe('Performance', () => {
      it('should complete within acceptable time', () => {
        const startTime = performance.now();
        [FunctionName](mockData.valid);
        const endTime = performance.now();
        expect(endTime - startTime).toBeLessThan(100); // 100ms threshold
      });
      
      it('should handle large datasets efficiently', () => {
        const largeData = Array(10000).fill(mockData.valid);
        const startTime = performance.now();
        [FunctionName](largeData);
        const endTime = performance.now();
        expect(endTime - startTime).toBeLessThan(1000);
      });
    });
  });
  
  describe('[ClassName]', () => {
    describe('Constructor', () => {
      it('should initialize with default values', () => {
        const instance = new [ClassName]();
        expect(instance.property1).toBe(defaultValue1);
        expect(instance.property2).toBe(defaultValue2);
      });
      
      it('should accept configuration options', () => {
        const config = { option1: 'value1', option2: 'value2' };
        const instance = new [ClassName](config);
        expect(instance.option1).toBe('value1');
      });
    });
    
    describe('Methods', () => {
      it('should chain methods correctly', () => {
        const result = instance
          .method1()
          .method2()
          .method3();
        expect(result).toBeInstanceOf([ClassName]);
      });
      
      it('should maintain state between method calls', () => {
        instance.setState('value');
        expect(instance.getState()).toBe('value');
      });
    });
  });
});
\`\`\`

### Integration Tests

\`\`\`[TEST_LANGUAGE]
describe('[ModuleName] Integration Tests', () => {
  let database;
  let server;
  
  beforeAll(async () => {
    // Setup test database and server
    database = await setupTestDatabase();
    server = await startTestServer();
  });
  
  afterAll(async () => {
    // Cleanup
    await database.close();
    await server.close();
  });
  
  describe('API Endpoints', () => {
    it('should create and retrieve resource', async () => {
      // Create resource
      const createResponse = await request(server)
        .post('/api/resources')
        .send({ name: 'Test Resource' })
        .expect(201);
      
      const resourceId = createResponse.body.id;
      
      // Retrieve resource
      const getResponse = await request(server)
        .get(\`/api/resources/\${resourceId}\`)
        .expect(200);
      
      expect(getResponse.body.name).toBe('Test Resource');
    });
    
    it('should handle database transactions correctly', async () => {
      await database.transaction(async (trx) => {
        const user = await createUser(trx, userData);
        const order = await createOrder(trx, user.id, orderData);
        
        expect(order.user_id).toBe(user.id);
        // Transaction will rollback after test
      });
      
      // Verify rollback
      const users = await database.select('*').from('users');
      expect(users).toHaveLength(0);
    });
    
    it('should handle concurrent requests', async () => {
      const promises = Array(10).fill(null).map((_, i) => 
        request(server)
          .post('/api/resources')
          .send({ name: \`Resource \${i}\` })
      );
      
      const responses = await Promise.all(promises);
      const ids = responses.map(r => r.body.id);
      
      // All IDs should be unique
      expect(new Set(ids).size).toBe(10);
    });
  });
  
  describe('External Service Integration', () => {
    it('should handle service failures gracefully', async () => {
      // Mock external service failure
      nock('https://external-api.com')
        .get('/data')
        .reply(500, 'Service unavailable');
      
      const response = await request(server)
        .get('/api/external-data')
        .expect(503);
      
      expect(response.body.error).toBe('External service unavailable');
    });
    
    it('should cache external service responses', async () => {
      // First request - hits external service
      nock('https://external-api.com')
        .get('/data')
        .reply(200, { data: 'test' });
      
      await request(server).get('/api/external-data');
      
      // Second request - should use cache
      const response = await request(server)
        .get('/api/external-data')
        .expect(200);
      
      expect(response.headers['x-cache']).toBe('HIT');
    });
  });
});
\`\`\`

### End-to-End Tests

\`\`\`[TEST_LANGUAGE]
describe('E2E User Flows', () => {
  let browser;
  let page;
  
  beforeAll(async () => {
    browser = await puppeteer.launch({ headless: true });
  });
  
  afterAll(async () => {
    await browser.close();
  });
  
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto('http://localhost:3000');
  });
  
  describe('Complete User Journey', () => {
    it('should complete purchase flow', async () => {
      // Login
      await page.click('[data-testid="login-button"]');
      await page.type('#email', 'test@example.com');
      await page.type('#password', 'password123');
      await page.click('[type="submit"]');
      
      // Add item to cart
      await page.waitForSelector('[data-testid="product-list"]');
      await page.click('[data-testid="add-to-cart-1"]');
      
      // Checkout
      await page.click('[data-testid="cart-icon"]');
      await page.click('[data-testid="checkout-button"]');
      
      // Payment
      await page.type('#card-number', '4242424242424242');
      await page.type('#expiry', '12/25');
      await page.type('#cvv', '123');
      await page.click('[data-testid="pay-button"]');
      
      // Confirmation
      await page.waitForSelector('[data-testid="order-confirmation"]');
      const orderNumber = await page.$eval(
        '[data-testid="order-number"]',
        el => el.textContent
      );
      
      expect(orderNumber).toMatch(/ORDER-\d{10}/);
    });
  });
});
\`\`\`

### Mock Data and Fixtures

\`\`\`[TEST_LANGUAGE]
// fixtures/testData.js
export const fixtures = {
  users: [
    {
      id: 'user-1',
      email: 'test1@example.com',
      name: 'Test User 1',
      role: 'admin'
    },
    {
      id: 'user-2',
      email: 'test2@example.com',
      name: 'Test User 2',
      role: 'user'
    }
  ],
  
  products: [
    {
      id: 'prod-1',
      name: 'Test Product',
      price: 99.99,
      stock: 100
    }
  ],
  
  // Edge case data
  edgeCases: {
    emptyString: '',
    nullValue: null,
    undefined: undefined,
    specialChars: '!@#$%^&*()',
    veryLongString: 'x'.repeat(10000),
    negativeNumber: -1,
    zero: 0,
    maxInt: Number.MAX_SAFE_INTEGER,
    minInt: Number.MIN_SAFE_INTEGER,
    emptyArray: [],
    emptyObject: {},
    deeplyNested: { a: { b: { c: { d: { e: 'value' }}}}
    }
  }
};

// Mock factory functions
export const createMockUser = (overrides = {}) => ({
  id: faker.datatype.uuid(),
  email: faker.internet.email(),
  name: faker.name.fullName(),
  createdAt: faker.date.past(),
  ...overrides
});

export const createMockProduct = (overrides = {}) => ({
  id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
  description: faker.commerce.productDescription(),
  ...overrides
});
\`\`\`

### Test Utilities

\`\`\`[TEST_LANGUAGE]
// testUtils.js
export const waitFor = async (condition, timeout = 5000) => {
  const startTime = Date.now();
  while (Date.now() - startTime < timeout) {
    if (await condition()) return true;
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  throw new Error('Timeout waiting for condition');
};

export const expectToEventually = async (fn, expected, timeout = 5000) => {
  await waitFor(async () => {
    try {
      const result = await fn();
      return result === expected;
    } catch {
      return false;
    }
  }, timeout);
};

export const mockApiResponse = (endpoint, response, status = 200) => {
  return nock('http://localhost:3000')
    .get(endpoint)
    .reply(status, response);
};

export const cleanDatabase = async () => {
  await database.raw('TRUNCATE TABLE users, products, orders RESTART IDENTITY CASCADE');
};
\`\`\`

### Coverage Report Script

\`\`\`json
// package.json scripts
{
  "scripts": {
    "test": "jest",
    "test:unit": "jest --testMatch='**/*.unit.test.js'",
    "test:integration": "jest --testMatch='**/*.integration.test.js'",
    "test:e2e": "jest --testMatch='**/*.e2e.test.js'",
    "test:coverage": "jest --coverage --coverageReporters=html,text,lcov",
    "test:watch": "jest --watch",
    "test:debug": "node --inspect-brk ./node_modules/.bin/jest --runInBand"
  }
}
\`\`\`

### CI/CD Integration

\`\`\`yaml
# .github/workflows/test.yml
name: Test Suite
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
      - run: npm ci
      - run: npm run test:coverage
      - uses: codecov/codecov-action@v2
        with:
          files: ./coverage/lcov.info
          fail_ci_if_error: true
\`\`\`

### Test Documentation

**Test Naming Convention**:
- Unit: \`should [expected behavior] when [condition]\`
- Integration: \`should [interact with X] and [produce Y]\`
- E2E: \`user should be able to [complete flow]\`

**Coverage Goals Met**:
- ✅ All functions tested
- ✅ All branches covered
- ✅ Edge cases handled
- ✅ Error scenarios tested
- ✅ Performance validated

**Run Instructions**:
\`\`\`bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific suite
npm run test:unit

# Debug mode
npm run test:debug
\`\`\``,
    variables: [
      {
        name: "CODE_TO_TEST",
        description: "The code that needs testing",
        required: true,
        example: "Function, class, or module code"
      },
      {
        name: "TESTING_FRAMEWORK",
        description: "Testing framework to use",
        required: false,
        example: "Jest, Mocha, pytest, JUnit"
      },
      {
        name: "PERCENTAGE",
        description: "Target coverage percentage",
        required: false,
        example: "80, 90, 95"
      }
    ],
    tips: [
      "Provide the complete code context for better test generation",
      "Specify any external dependencies or APIs",
      "Mention if tests should be async/await compatible",
      "Include any specific edge cases to test",
      "Specify if mocking is preferred over real implementations"
    ]
  },

  {
    id: "refactoring-master",
    name: "Refactoring Master",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a refactoring expert with 15+ years of experience in code modernization and technical debt reduction. Your expertise includes:
- Design patterns (Gang of Four, Enterprise, Domain-Driven Design)
- SOLID principles and clean code practices
- Code smells identification and remediation
- Legacy code modernization strategies
- Technical debt quantification and prioritization
- Microservices extraction from monoliths
- Performance optimization through refactoring
- Test-driven refactoring techniques
- Incremental refactoring with zero downtime
- Code metrics and quality analysis tools

You provide safe, incremental refactoring plans that maintain functionality while improving code quality. You understand business constraints and can prioritize refactoring efforts based on ROI and risk assessment.`,
    prompt: `Analyze the provided code and create a comprehensive refactoring strategy that improves maintainability, readability, and performance while preserving functionality.

## 📝 Code to Refactor
\`\`\`[LANGUAGE]
[CODE_TO_REFACTOR]
\`\`\`

## Context
- Current Issues: [DESCRIBE_PROBLEMS]
- Tech Stack: [FRAMEWORKS_LIBRARIES]
- Constraints: [TIME_BUDGET_CONSTRAINTS]
- Priority: [PERFORMANCE/MAINTAINABILITY/TESTABILITY]

## 🔄 Refactoring Analysis

### Code Quality Assessment

#### Current State Metrics
- **Cyclomatic Complexity**: [Calculate complexity score and explain impact]
- **Code Duplication**: [Identify duplicated patterns with line numbers]
- **Coupling Score**: [Analyze dependencies between modules]
- **Cohesion Level**: [Evaluate single responsibility adherence]
- **Technical Debt Score**: [Quantify in hours/days to fix]

#### Identified Code Smells

1. **Long Method**
   - Location: Lines 45-289 in UserService.js
   - Impact: Difficult to test and understand
   - Priority: HIGH
   - Estimated Fix Time: 4 hours

2. **God Class**
   - Location: ApplicationController class
   - Impact: Violates single responsibility, hard to maintain
   - Priority: CRITICAL
   - Estimated Fix Time: 8 hours

### 🎯 Refactoring Strategy

#### Phase 1: Quick Wins (2-4 hours)
**Objective**: Immediate improvements with zero risk

##### 1.1 Rename Variables and Functions
\`\`\`[LANGUAGE]
// Before: Unclear naming
function calc(x, y, z) {
  return x * y + z * 0.1;
}

// After: Self-documenting code
function calculateTotalPriceWithTax(basePrice, quantity, taxRate) {
  const TAX_MULTIPLIER = 0.1;
  return basePrice * quantity + taxRate * TAX_MULTIPLIER;
}
\`\`\`

##### 1.2 Extract Magic Numbers
\`\`\`[LANGUAGE]
// Before: Magic numbers everywhere
if (user.age > 18 && user.score > 75) {
  discount = price * 0.15;
}

// After: Named constants
const ADULT_AGE_THRESHOLD = 18;
const LOYALTY_SCORE_THRESHOLD = 75;
const LOYALTY_DISCOUNT_RATE = 0.15;

if (user.age > ADULT_AGE_THRESHOLD && user.score > LOYALTY_SCORE_THRESHOLD) {
  discount = price * LOYALTY_DISCOUNT_RATE;
}
\`\`\`

#### Phase 2: Structural Improvements (1-2 days)
**Objective**: Improve architecture and design patterns

##### 2.1 Extract Method Refactoring
\`\`\`[LANGUAGE]
// Before: 200-line function with mixed responsibilities
function processOrder(order) {
  // validation logic (50 lines)
  // pricing calculation (40 lines)
  // inventory check (30 lines)
  // payment processing (40 lines)
  // notification sending (40 lines)
}

// After: Single Responsibility Principle
class OrderProcessor {
  process(order) {
    const validationResult = this.validateOrder(order);
    if (!validationResult.isValid) {
      throw new ValidationError(validationResult.errors);
    }
    
    const pricing = this.calculatePricing(order);
    const inventory = await this.checkInventory(order.items);
    const payment = await this.processPayment(order, pricing);
    await this.sendNotifications(order, payment);
    
    return this.createOrderConfirmation(order, payment);
  }
  
  private validateOrder(order) {
    // Focused validation logic
    return { isValid: true, errors: [] };
  }
  
  private calculatePricing(order) {
    // Pricing calculation with tax, discounts
    return { total: 0, tax: 0, discount: 0 };
  }
}
\`\`\`

#### Phase 3: Deep Refactoring (1 week)
[Complete refactoring plan with patterns, testing strategy, rollout plan]

### 📊 Impact Analysis

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Cyclomatic Complexity | 45 | 12 | -73% |
| Code Duplication | 35% | 5% | -86% |
| Test Coverage | 40% | 95% | +138% |
| Bug Rate | 12/month | 2/month | -83% |

### ✅ Validation Checklist
- [ ] All existing tests pass
- [ ] New tests added for refactored code
- [ ] Performance benchmarks show improvement
- [ ] Code review completed
- [ ] Documentation updated`,
    variables: [
      {
        name: "CODE_TO_REFACTOR",
        description: "The code that needs refactoring",
        required: true,
        example: "Legacy function, class, or entire module"
      },
      {
        name: "LANGUAGE",
        description: "Programming language",
        required: true,
        example: "JavaScript, TypeScript, Python, Java"
      },
      {
        name: "DESCRIBE_PROBLEMS",
        description: "Current issues with the code",
        required: false,
        example: "Hard to test, slow performance, difficult to maintain"
      },
      {
        name: "TIME_BUDGET_CONSTRAINTS",
        description: "Available time and resources",
        required: false,
        example: "2 sprints, 3 developers"
      }
    ],
    tips: [
      "Include test coverage status of current code",
      "Mention any upcoming features that might affect refactoring",
      "Specify if backward compatibility is required",
      "Include current performance metrics if available"
    ]
  },

  {
    id: "devops-pipeline",
    name: "DevOps Pipeline",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a DevOps architect with extensive experience in CI/CD, infrastructure as code, container orchestration, and cloud platforms. You design robust automation pipelines that enable continuous delivery with confidence.`,
    prompt: `Design a complete DevOps automation solution for the described application. Include CI/CD pipelines, infrastructure as code, monitoring, and deployment strategies.

## 🎯 Project Requirements
### Application Details:
[DESCRIBE_APPLICATION]

### Current State:
- Team Size: [NUMBER] developers
- Deployment Frequency: [DAILY/WEEKLY/MONTHLY]
- Tech Stack: [LANGUAGES_FRAMEWORKS]

## 🚀 Complete DevOps Solution

### CI/CD Pipeline

#### GitHub Actions Workflow
\`\`\`yaml
name: Complete CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Setup environment
        uses: actions/setup-node@v4
        with:
          node-version: '20'
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build application
        run: npm run build

  security-scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Run Trivy scan
        uses: aquasecurity/trivy-action@master
        with:
          scan-type: 'fs'
          scan-ref: '.'
      - name: Run Semgrep
        uses: returntocorp/semgrep-action@v1

  deploy:
    needs: [test, security-scan]
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - name: Deploy to production
        run: |
          echo "Deploying to production"
          kubectl apply -f k8s/
\`\`\`

### Infrastructure as Code

#### Terraform Configuration
\`\`\`hcl
# main.tf
resource "aws_ecs_cluster" "main" {
  name = "production-cluster"
}

resource "aws_ecs_service" "app" {
  name            = "app-service"
  cluster         = aws_ecs_cluster.main.id
  task_definition = aws_ecs_task_definition.app.arn
  desired_count   = 3

  deployment_configuration {
    maximum_percent         = 200
    minimum_healthy_percent = 100
  }
}
\`\`\`

### Kubernetes Deployment
\`\`\`yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
      - name: app
        image: myapp:latest
        ports:
        - containerPort: 8080
        resources:
          requests:
            memory: "256Mi"
            cpu: "250m"
          limits:
            memory: "512Mi"
            cpu: "500m"
\`\`\`

### Monitoring Stack
- Prometheus for metrics collection
- Grafana for visualization
- AlertManager for alerting
- ELK stack for log aggregation

### Security Implementation
- Container scanning with Trivy
- SAST with Semgrep
- Secrets management with Vault
- Network policies for pod isolation`,
    variables: [
      {
        name: "DESCRIBE_APPLICATION",
        description: "Type and architecture of application",
        required: true,
        example: "Microservices API, React SPA"
      },
      {
        name: "LANGUAGES_FRAMEWORKS",
        description: "Technology stack",
        required: true,
        example: "Node.js, Python, Java"
      }
    ],
    tips: [
      "Specify current deployment challenges",
      "Include compliance requirements",
      "Mention team's DevOps experience level"
    ]
  },

  {
    id: "security-auditor",
    name: "Security Auditor",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a cybersecurity expert specializing in application security, vulnerability assessment, and compliance. You identify security vulnerabilities and provide detailed remediation guidance following OWASP best practices.`,
    prompt: `Perform a comprehensive security audit on the provided code or infrastructure. Identify vulnerabilities, assess risks, and provide remediation guidance.

## 🔒 Audit Target
### Code/Configuration to Audit:
\`\`\`[LANGUAGE/FORMAT]
[CODE_OR_CONFIG]
\`\`\`

## 🛡️ Security Audit Report

### Executive Summary
**Overall Security Score**: [X/100]
**Risk Level**: [CRITICAL/HIGH/MEDIUM/LOW]
**Immediate Actions Required**: [NUMBER]

### 🔍 Vulnerability Assessment

#### Critical Vulnerabilities

##### 1. SQL Injection - CWE-89
**Severity**: CRITICAL (CVSS: 9.8)
**Location**: UserController.js:45

**Vulnerable Code**:
\`\`\`javascript
const query = \`SELECT * FROM users WHERE id = \${req.params.id}\`;
db.query(query);
\`\`\`

**Remediation**:
\`\`\`javascript
// Use parameterized queries
const query = 'SELECT * FROM users WHERE id = ?';
db.query(query, [req.params.id]);

// Or use an ORM
const user = await User.findById(req.params.id);
\`\`\`

##### 2. Cross-Site Scripting (XSS) - CWE-79
**Severity**: HIGH (CVSS: 7.5)
**Location**: Multiple template files

**Prevention**:
\`\`\`javascript
// Input validation
const sanitized = DOMPurify.sanitize(userInput);

// Content Security Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'nonce-{NONCE}'"]
  }
}));
\`\`\`

##### 3. Insecure Authentication
**Severity**: HIGH (CVSS: 8.0)

**Issues Found**:
- Passwords stored in plain text
- No rate limiting on login attempts
- Session tokens never expire

**Remediation**:
\`\`\`javascript
// Secure password hashing
const bcrypt = require('bcrypt');
const hashedPassword = await bcrypt.hash(password, 12);

// Rate limiting
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5 // limit each IP to 5 requests
});

app.post('/login', loginLimiter, async (req, res) => {
  // Login logic
});

// Session management
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true, // HTTPS only
    httpOnly: true,
    maxAge: 1000 * 60 * 30 // 30 minutes
  }
}));
\`\`\`

### 🔐 Authentication & Authorization

#### Recommendations:
1. Implement MFA for all users
2. Use JWT with short expiration (15-30 minutes)
3. Implement refresh token rotation
4. Add CAPTCHA after 3 failed login attempts
5. Log all authentication events

### 📋 Compliance Checklist
- [ ] OWASP Top 10 addressed
- [ ] GDPR data protection requirements
- [ ] PCI-DSS for payment handling
- [ ] SOC2 security controls
- [ ] HIPAA for healthcare data

### 🚀 Implementation Roadmap
1. **Immediate** (24 hours): Fix SQL injection and XSS vulnerabilities
2. **Short-term** (1 week): Implement secure authentication
3. **Medium-term** (1 month): Complete compliance requirements
4. **Long-term** (3 months): Implement advanced security monitoring`,
    variables: [
      {
        name: "CODE_OR_CONFIG",
        description: "Code or configuration to audit",
        required: true,
        example: "Application code, Infrastructure configs"
      },
      {
        name: "LANGUAGE/FORMAT",
        description: "Programming language or config format",
        required: true,
        example: "JavaScript, Python, YAML, JSON"
      }
    ],
    tips: [
      "Include all dependencies and versions",
      "Specify compliance requirements upfront",
      "Mention data sensitivity levels",
      "Include authentication methods currently used"
    ]
  },

  {
    id: "performance-optimizer",
    name: "Performance Optimizer",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a performance optimization expert with deep knowledge of algorithms, caching strategies, database optimization, and system architecture. You identify bottlenecks and provide actionable optimization strategies with measurable improvements.`,
    prompt: `Analyze the provided code or system for performance issues and create a comprehensive optimization plan.

## 🎯 System/Code to Optimize
\`\`\`[LANGUAGE]
[CODE_OR_SYSTEM_DESCRIPTION]
\`\`\`

## Performance Context
- Current Issues: [DESCRIBE_PERFORMANCE_PROBLEMS]
- Target Metrics: [RESPONSE_TIME/THROUGHPUT]
- User Load: [CONCURRENT_USERS]

## ⚡ Performance Optimization Plan

### Current Performance Baseline
- Response Time (p95): 850ms
- Throughput: 1000 req/s
- CPU Usage: 75%
- Memory: 2.5GB

### 🔍 Bottleneck Analysis

#### 1. Database Performance
**Issue**: N+1 queries causing 60% of response time

**Current Problem**:
\`\`\`javascript
// N+1 query problem
const users = await User.findAll();
for (const user of users) {
  user.orders = await Order.findByUserId(user.id);
}
\`\`\`

**Optimized Solution**:
\`\`\`javascript
// Single query with join
const users = await User.findAll({
  include: [{
    model: Order,
    as: 'orders'
  }]
});

// Or use DataLoader for batching
const orderLoader = new DataLoader(async (userIds) => {
  const orders = await Order.findAll({
    where: { userId: userIds }
  });
  return userIds.map(id => 
    orders.filter(order => order.userId === id)
  );
});
\`\`\`

**Impact**: 65% reduction in query time

#### 2. Memory Optimization
**Issue**: Memory leaks and inefficient data structures

**Solutions**:
\`\`\`javascript
// Before: Keeping large arrays in memory
const allData = await loadAllData(); // 500MB
const filtered = allData.filter(item => item.active);

// After: Stream processing
const stream = createReadStream('data.json');
const filtered = [];

stream.pipe(JSONStream.parse('*'))
  .on('data', (item) => {
    if (item.active) {
      filtered.push(item);
    }
  });
\`\`\`

#### 3. Caching Strategy
\`\`\`javascript
// Implement multi-layer caching
const cache = {
  memory: new LRU({ max: 500 }), // L1: Memory cache
  redis: redisClient, // L2: Redis cache
  
  async get(key) {
    // Check L1
    if (this.memory.has(key)) {
      return this.memory.get(key);
    }
    
    // Check L2
    const redisValue = await this.redis.get(key);
    if (redisValue) {
      this.memory.set(key, redisValue);
      return JSON.parse(redisValue);
    }
    
    return null;
  },
  
  async set(key, value, ttl = 3600) {
    this.memory.set(key, value);
    await this.redis.setex(key, ttl, JSON.stringify(value));
  }
};
\`\`\`

#### 4. Algorithm Optimization
\`\`\`javascript
// Before: O(n²) complexity
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

// After: O(n) complexity
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();
  
  for (const item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    }
    seen.add(item);
  }
  
  return Array.from(duplicates);
}
\`\`\`

### 📊 Performance Improvements

| Metric | Before | After | Improvement |
|--------|--------|-------|-------------|
| Response Time (p95) | 850ms | 320ms | -62% |
| Throughput | 1000 req/s | 2500 req/s | +150% |
| CPU Usage | 75% | 45% | -40% |
| Memory | 2.5GB | 1.8GB | -28% |

### 🚀 Implementation Plan
1. **Week 1**: Database optimization (N+1 queries, indexing)
2. **Week 2**: Caching implementation (Redis, CDN)
3. **Week 3**: Algorithm optimization and code refactoring
4. **Week 4**: Load testing and fine-tuning`,
    variables: [
      {
        name: "CODE_OR_SYSTEM_DESCRIPTION",
        description: "Code or system to optimize",
        required: true,
        example: "API endpoint, database queries, frontend application"
      },
      {
        name: "DESCRIBE_PERFORMANCE_PROBLEMS",
        description: "Current performance issues",
        required: true,
        example: "Slow response times, high memory usage"
      }
    ],
    tips: [
      "Include current performance metrics and benchmarks",
      "Specify performance targets and SLAs",
      "Mention infrastructure constraints and limitations",
      "Provide sample data volumes and growth projections"
    ]
  },

  {
    id: "documentation-writer",
    name: "Documentation Writer",
    category: "development",
    version: "2.0",
    lastUpdated: "2025-01",
    systemPrompt: `You are a technical documentation expert with expertise in API documentation, user guides, README files, and developer documentation. You create clear, comprehensive documentation that serves both technical and non-technical audiences effectively.`,
    prompt: `Generate comprehensive documentation for the provided code or project. Include API references, usage examples, and deployment guides.

## 📚 Documentation Requirements
### Project/Code:
\`\`\`[LANGUAGE]
[CODE_OR_PROJECT_DESCRIPTION]
\`\`\`

### Target Audience: [DEVELOPERS/USERS/ADMINISTRATORS]
### Documentation Type: [API_DOCS/USER_GUIDE/README/TECHNICAL_SPEC]

## 📖 Complete Documentation

### README.md
\`\`\`markdown
# Project Name

![Build Status](https://img.shields.io/github/workflow/status/org/repo/CI)
![Coverage](https://img.shields.io/codecov/c/github/org/repo)
![License](https://img.shields.io/github/license/org/repo)

## 🚀 Features

- **Feature 1**: Brief description of what it does
- **Feature 2**: How it benefits users
- **Feature 3**: Key differentiator

## 📦 Installation

### Prerequisites

- Node.js >= 16.0.0
- npm >= 8.0.0
- PostgreSQL >= 13 (optional)

### Quick Start

1. Clone the repository:
   \\\`\\\`\\\`bash
   git clone https://github.com/org/repo.git
   cd repo
   \\\`\\\`\\\`

2. Install dependencies:
   \\\`\\\`\\\`bash
   npm install
   \\\`\\\`\\\`

3. Configure environment:
   \\\`\\\`\\\`bash
   cp .env.example .env
   # Edit .env with your configuration
   \\\`\\\`\\\`

4. Run the application:
   \\\`\\\`\\\`bash
   npm start
   \\\`\\\`\\\`

## 🔧 Usage

### Basic Example

\\\`\\\`\\\`javascript
const MyLibrary = require('my-library');

const client = new MyLibrary({
  apiKey: 'your-api-key',
  endpoint: 'https://api.example.com'
});

const result = await client.doSomething({
  param1: 'value1',
  param2: 'value2'
});

console.log(result);
\\\`\\\`\\\`

### Advanced Example

\\\`\\\`\\\`javascript
// With error handling and options
try {
  const client = new MyLibrary({
    apiKey: process.env.API_KEY,
    timeout: 5000,
    retries: 3
  });
  
  const result = await client.complexOperation({
    data: largeDataset,
    options: {
      parallel: true,
      batchSize: 100
    }
  });
  
  console.log('Success:', result);
} catch (error) {
  console.error('Error:', error.message);
}
\\\`\\\`\\\`

## 📚 API Reference

### Class: \`MyLibrary\`

#### Constructor

\\\`\\\`\\\`javascript
new MyLibrary(options)
\\\`\\\`\\\`

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| options.apiKey | string | Yes | - | API key for authentication |
| options.endpoint | string | No | https://api.example.com | API endpoint URL |
| options.timeout | number | No | 30000 | Request timeout in milliseconds |
| options.retries | number | No | 3 | Number of retry attempts |

#### Methods

##### \`doSomething(params)\`

Performs the main operation.

**Parameters:**

| Name | Type | Required | Description |
|------|------|----------|-------------|
| params.param1 | string | Yes | First parameter |
| params.param2 | string | No | Optional second parameter |

**Returns:**

\`Promise<Result>\` - The operation result

**Example:**

\\\`\\\`\\\`javascript
const result = await client.doSomething({
  param1: 'value1',
  param2: 'value2'
});
\\\`\\\`\\\`

**Throws:**

- \`ValidationError\` - If parameters are invalid
- \`ApiError\` - If the API request fails

## 🧪 Testing

\\\`\\\`\\\`bash
# Run all tests
npm test

# Run with coverage
npm run test:coverage

# Run specific test suite
npm test -- --grep "API"

# Watch mode
npm run test:watch
\\\`\\\`\\\`

## 🚢 Deployment

### Docker

\\\`\\\`\\\`bash
# Build image
docker build -t myapp .

# Run container
docker run -p 3000:3000 myapp
\\\`\\\`\\\`

### Kubernetes

\\\`\\\`\\\`bash
# Apply manifests
kubectl apply -f k8s/

# Check status
kubectl get pods
\\\`\\\`\\\`

### Cloud Platforms

<details>
<summary>AWS Deployment</summary>

\\\`\\\`\\\`bash
# Using AWS CLI
aws ecs update-service --cluster production --service myapp --force-new-deployment
\\\`\\\`\\\`

</details>

<details>
<summary>Google Cloud Deployment</summary>

\\\`\\\`\\\`bash
# Using gcloud
gcloud run deploy myapp --image gcr.io/project/myapp
\\\`\\\`\\\`

</details>

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create your feature branch (\`git checkout -b feature/AmazingFeature\`)
3. Commit your changes (\`git commit -m 'Add some AmazingFeature'\`)
4. Push to the branch (\`git push origin feature/AmazingFeature\`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors
- Inspired by [Project X]
- Built with [Library Y]

## 📞 Support

- 📧 Email: support@example.com
- 💬 Discord: [Join our server](https://discord.gg/example)
- 🐛 Issues: [GitHub Issues](https://github.com/org/repo/issues)
- 📖 Docs: [Documentation](https://docs.example.com)
\`\`\`

### API Documentation (OpenAPI)

\`\`\`yaml
openapi: 3.0.0
info:
  title: My API
  description: Comprehensive API for managing resources
  version: 1.0.0
  contact:
    email: api@example.com

servers:
  - url: https://api.example.com/v1
    description: Production server
  - url: https://staging-api.example.com/v1
    description: Staging server

paths:
  /resources:
    get:
      summary: List all resources
      description: Returns a paginated list of resources
      parameters:
        - name: page
          in: query
          schema:
            type: integer
            default: 1
        - name: limit
          in: query
          schema:
            type: integer
            default: 20
      responses:
        '200':
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  data:
                    type: array
                    items:
                      $ref: '#/components/schemas/Resource'
                  pagination:
                    $ref: '#/components/schemas/Pagination'
        '401':
          description: Unauthorized
        '429':
          description: Rate limited

components:
  schemas:
    Resource:
      type: object
      required:
        - id
        - name
      properties:
        id:
          type: string
          format: uuid
        name:
          type: string
          minLength: 1
          maxLength: 255
        created_at:
          type: string
          format: date-time
\`\`\`

### User Guide

[Step-by-step tutorials and guides for end users]

### Developer Guide

[Technical documentation for developers extending or contributing to the project]`,
    variables: [
      {
        name: "CODE_OR_PROJECT_DESCRIPTION",
        description: "Code or project to document",
        required: true,
        example: "API endpoints, library functions, entire project"
      },
      {
        name: "LANGUAGE",
        description: "Programming language",
        required: true,
        example: "JavaScript, Python, Java, Go"
      },
      {
        name: "DEVELOPERS/USERS/ADMINISTRATORS",
        description: "Target audience for documentation",
        required: true,
        example: "Developers, End Users, System Administrators"
      }
    ],
    tips: [
      "Provide clear project context and purpose",
      "Specify the technical level of your audience",
      "Include specific examples you want documented",
      "Mention any existing documentation to update or replace",
      "Specify preferred documentation format and style"
    ]
  }
];

// Export function to get prompt by ID
export function getAgentPrompt(id: string): AgentPrompt | undefined {
  return agentPrompts.find(prompt => prompt.id === id);
}

// Export function to get prompts by category
export function getPromptsByCategory(category: string): AgentPrompt[] {
  return agentPrompts.filter(prompt => prompt.category === category);
}
