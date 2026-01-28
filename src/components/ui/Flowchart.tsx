import styles from './Flowchart.module.css'

interface Branch {
  label: string
  action: string
}

interface FlowNode {
  type: 'start' | 'decision' | 'branch' | 'end'
  label: string
  branches?: Branch[]
}

interface FlowchartProps {
  title: string
  // Original style
  startNode?: string
  middleNode?: string
  branches?: Branch[]
  // Extended style with nodes array
  nodes?: FlowNode[]
}

export function Flowchart({ title, startNode, middleNode, branches, nodes }: FlowchartProps) {
  // If nodes array is provided, render the extended format
  if (nodes && nodes.length > 0) {
    return (
      <div className={styles.flowchart}>
        <div className={styles.title}>{title}</div>
        
        {nodes.map((node, i) => (
          <div key={i}>
            {node.type === 'start' && (
              <>
                <div className={`${styles.node} ${styles.start}`}>{node.label}</div>
                {i < nodes.length - 1 && <div className={styles.arrow}>↓</div>}
              </>
            )}
            
            {node.type === 'decision' && (
              <>
                <div className={styles.node}>{node.label}</div>
                {node.branches && node.branches.length > 0 && (
                  <div className={styles.branches}>
                    {node.branches.map((branch, j) => (
                      <div key={j} className={styles.branch}>
                        <div className={styles.branchLabel}>{branch.label}</div>
                        <div className={styles.branchAction}>{branch.action}</div>
                      </div>
                    ))}
                  </div>
                )}
                {i < nodes.length - 1 && <div className={styles.arrow}>↓</div>}
              </>
            )}
            
            {node.type === 'end' && (
              <div className={`${styles.node} ${styles.end}`}>{node.label}</div>
            )}
          </div>
        ))}
      </div>
    )
  }

  // Original format
  return (
    <div className={styles.flowchart}>
      <div className={styles.title}>{title}</div>
      
      {startNode && (
        <>
          <div className={`${styles.node} ${styles.start}`}>{startNode}</div>
          <div className={styles.arrow}>↓</div>
        </>
      )}
      
      {middleNode && (
        <>
          <div className={styles.node}>{middleNode}</div>
          <div className={styles.arrow}>↓</div>
        </>
      )}
      
      {branches && branches.length > 0 && (
        <div className={styles.branches}>
          {branches.map((branch, i) => (
            <div key={i} className={styles.branch}>
              <div className={styles.branchLabel}>{branch.label}</div>
              <div className={styles.branchAction}>{branch.action}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
